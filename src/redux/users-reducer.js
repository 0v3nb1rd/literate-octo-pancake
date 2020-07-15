const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "https://mosgorzdrav.ru/uploads/staff/d4e1787b-1497868489.jpg",
    //   fullName: "Andrey",
    //   status: "I'm a big boss",
    //   location: {
    //     country: "Russia",
    //     city: "Piter",
    //   },
    //   followed: true,
    // },
    // {
    //   id: 2,
    //   fullName: "Valera",
    //   photoUrl:
    //     "https://www.meme-arsenal.com/memes/d1a9c2974823d2c1503b1f3dafc12a6f.jpg",
    //   status: "Hello there, this is the first post",
    //   location: {
    //     country: "Belarus",
    //     city: "Minsk",
    //   },
    //   followed: false,
    // },
    // {
    //   id: 3,
    //   fullName: "Nazar",
    //   photoUrl: "https://www.pisni.org.ua/files/010/002335_nazar_savko.jpg",
    //   status: "Hi there",
    //   location: {
    //     country: "Ukraine",
    //     city: "Kyiv",
    //   },
    //   followed: false,
    // },
    // {
    //   id: 4,
    //   fullName: "Ivan",
    //   photoUrl:
    //     "https://high.itstep.org/wp-content/uploads/2017/06/ivanets384x500.jpg",
    //   status: "Let's go go go",
    //   location: {
    //     country: "Ukraine",
    //     city: "Kharkiv",
    //   },
    //   followed: false,
    // },
    // {
    //   id: 5,
    //   fullName: "John",
    //   photoUrl: "https://mdundo.com/media/articles/1582021339_5707_b.jpg",
    //   status: "Couden’t be better",
    //   location: {
    //     country: "Russia",
    //     city: "Moscow",
    //   },
    //   followed: false,
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
