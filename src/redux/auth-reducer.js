import { AuthAPI } from '../API/api';

const SET_USER_DATA = 'SET-USER-DATA';
const AUTORIZED = 'AUTORIZED';

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
        isAuth: true,
      };
    }
    case AUTORIZED: {
      return {
        ...state,
        id: action.myId,
      };
    }
    default:
      return state;
  }
};

/*----- Action Creators -----*/
export const setUserDataAC = (id, login, email) => ({
  type: SET_USER_DATA,
  data: { id, login, email },
});
export const autorizedAC = (myId) => ({
  type: AUTORIZED,
  myId,
});

/*----- Thank Creators -----*/
export const getUserProfile = () => {
  return (dispatch) => {
    AuthAPI.getAuth().then((resp) => {
      if (resp.data.resultCode === 0) {
        let { id, login, email } = resp.data.data;
        dispatch(setUserDataAC(id, login, email));
      }
    });
  };
};

export const loginUser = (usrData) => {
  return (dispatch) => {
    AuthAPI.login(usrData).then((resp) => {
      if (resp.data.resultCode === 0) {
        dispatch(autorizedAC(resp.data.userId));
      }
    });
  };
};

export default authReducer;
