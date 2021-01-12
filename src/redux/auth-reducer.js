import { AuthAPI } from '../API/api';

const SET_USER_DATA = 'SET-USER-DATA';

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
    default:
      return state;
  }
};

/*----- Action Creators -----*/
export const setUserDataAC = (id, login, email) => ({
  type: SET_USER_DATA,
  data: { id, login, email },
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

export default authReducer;
