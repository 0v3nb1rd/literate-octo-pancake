import { getUserProfile } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initState = {
  initialized: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

/*----- Action Creators -----*/
export const initSuccessAC = () => ({ type: INITIALIZED_SUCCESS });

/*----- Thank Creators -----*/
export const initApp = () => {
  return (dispatch) => {
    dispatch(getUserProfile()).then(() => {
      dispatch(initSuccessAC());
    });
  };
};

export default appReducer;
