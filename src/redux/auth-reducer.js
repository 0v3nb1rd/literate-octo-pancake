import { stopSubmit } from 'redux-form';
import { AuthAPI } from '../API/api';

const SET_USER_DATA = 'SET-USER-DATA';
// const AUTORIZED = 'AUTORIZED';

const initState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        // isAuth: true,
      };
    }
    // case AUTORIZED: {
    //   return {
    //     ...state,
    //     id: action.myId,
    //   };
    // }
    default:
      return state;
  }
};

/*----- Action Creators -----*/
export const setUserDataAC = (id, login, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, login, email, isAuth },
});
// export const autorizedAC = (myId) => ({
//   type: AUTORIZED,
//   myId,
// });

/*----- Thank Creators -----*/
export const getUserProfile = () => {
  return (dispatch) => {
    return AuthAPI.getAuth().then((resp) => {
      if (resp.data.resultCode === 0) {
        let { id, login, email } = resp.data.data;
        dispatch(setUserDataAC(id, login, email, true));
      }
    });
  };
};

export const loginUser = (usrData) => {
  return (dispatch) => {
    // let action = stopSubmit('login', { _error: 'Something is wrong :(' });
    // dispatch(action);
    AuthAPI.login(usrData).then((resp) => {
      if (resp.data.resultCode === 0) {
        dispatch(getUserProfile());
      } else {
        // console.log(resp);
        let message =
          resp.data.messages.length > 0 ? resp.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', { _error: message }));
      }
    });
  };
};
export const logoutUser = () => {
  return (dispatch) => {
    AuthAPI.logout().then((resp) => {
      if (resp.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
      }
    });
  };
};

export default authReducer;
