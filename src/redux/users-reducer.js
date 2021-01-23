import { UsersAPI, FollowAPI } from '../API/api';

const SET_USERS = 'SET-USERS';
const FOOLLOW = 'FOOLLOW';
const UNFOOLLOW = 'UNFOOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USER_COUNT = 'SET-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING_PROGRESS';

let initState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: Boolean,
  followInProgress: [],
};
const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case FOOLLOW:
      return {
        ...state,
        users: state.users.map((usr) => {
          if (usr.id === action.user) {
            return { ...usr, followed: true };
          }
          return usr;
        }),
      };
    case UNFOOLLOW:
      return {
        ...state,
        users: state.users.map((usr) => {
          if (usr.id === action.user) {
            return { ...usr, followed: false };
          }
          return usr;
        }),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetch,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      // debugger;
      return {
        ...state,
        followInProgress: action.isFetch
          ? [...state.followInProgress, action.id]
          : [],
      };
    default:
      return state;
  }
};

/*----- Action Creators -----*/
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users,
});
export const followUserAC = (usr) => ({
  type: FOOLLOW,
  user: usr,
});
export const unfollowUserAC = (usr) => ({
  type: UNFOOLLOW,
  user: usr,
});
export const setCurrentPageAC = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
export const setUserCountAC = (totalUsersCount) => ({
  type: SET_USER_COUNT,
  totalUsersCount,
});
export const fetchingDataAC = (isFetch) => ({
  type: TOGGLE_IS_FETCHING,
  isFetch,
});
export const followInProgressAC = (isFetch, id) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetch,
  id,
});

/*----- Thunk Creators -----*/
export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(fetchingDataAC(true));
    UsersAPI.getUsers(currentPage, pageSize).then((resp) => {
      dispatch(setUsersAC(resp.items));
      dispatch(setUserCountAC(resp.totalCount));
      dispatch(fetchingDataAC(false));
    });
  };
};
export const changePage = (itm, pageSize) => {
  return (dispatch) => {
    dispatch(fetchingDataAC(true));
    dispatch(setCurrentPageAC(itm));
    UsersAPI.getUsers(itm, pageSize).then((resp) => {
      dispatch(setUsersAC(resp.items));
      dispatch(setUserCountAC(resp.totalCount));
      dispatch(fetchingDataAC(false));
    });
  };
};
export const follow = (id) => {
  return (dispatch) => {
    dispatch(followInProgressAC(true, id));
    FollowAPI.followUser(id).then((resp) => {
      if (resp.resultCode === 0) {
        dispatch(followUserAC(id));
        dispatch(followInProgressAC(false, id));
      }
    });
  };
};
export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(followInProgressAC(true, id));
    FollowAPI.unfollowUser(id).then((resp) => {
      if (resp.resultCode === 0) {
        dispatch(unfollowUserAC(id));
        dispatch(followInProgressAC(false, id));
      }
    });
  };
};

export default usersReducer;
