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

export default usersReducer;
