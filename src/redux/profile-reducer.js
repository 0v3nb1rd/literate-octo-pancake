const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initState = {
  onlineUsers: [
    {
      id: 1,
      name: 'Nazar Petrow',
    },
    {
      id: 2,
      name: 'John Doe',
    },
    {
      id: 3,
      name: 'Gilerme Donaldinyo',
    },
  ],
  dataPosts: [
    {
      id: 1,
      txt: 'Some text here',
    },
    {
      id: 2,
      txt:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.',
    },
    {
      id: 3,
      txt: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    },
    {
      id: 4,
      txt: 'lorem25 Lorem ipsum dolor sit, amet consectetur adipisicing',
    },
    {
      id: 5,
      txt: 'Hi lorem25 Lorem ipsum dolor sit, amet consectetur adipisicing',
    },
  ],
  newTxt: '',
  profile: null,
};
const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      return {
        ...state,
        newTxt: action.txt,
      };
    }
    case ADD_POST: {
      return {
        ...state,
        dataPosts: [
          {
            id: Math.floor(Math.random() * 100),
            txt: state.newTxt,
          },
          ...state.dataPosts,
        ],
        newTxt: '',
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateTextCreator = (value) => ({
  type: UPDATE_TEXT,
  txt: value,
});
export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
