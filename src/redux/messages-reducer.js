const ADD_MESSAGE_TXT = 'ADD-MESSAGE-TXT';
const UPDATE_MESSAGE_TXT = 'UPDATE-MESSAGE-TXT';

const initState = {
  dataUsers: [
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
  dataMsg: [
    {
      id: 1,
      msg: 'Hello World!',
    },
    {
      id: 2,
      msg: 'How are you?',
    },
    {
      id: 3,
      msg: 'Fine thank you',
    },
    {
      id: 4,
      msg: 'What are you doing now?',
    },
    {
      id: 5,
      msg: 'nothing special baby :)',
    },
    {
      id: 6,
      msg: 'Ok bye',
    },
    {
      id: 7,
      msg: 'Ok hello',
    },
  ],
  newTxt: '',
};
const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TXT:
      return {
        ...state,
        newTxt: action.txt,
      };
    case ADD_MESSAGE_TXT:
      return {
        ...state,
        dataMsg: [
          {
            id: Math.floor(Math.random() * 100),
            msg: state.newTxt,
          },
          ...state.dataMsg,
        ],
        newTxt: '',
      };
    default:
      return state;
  }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE_TXT });
export const updateMessageCreator = (value) => ({
  type: UPDATE_MESSAGE_TXT,
  txt: value,
});

export default messageReducer;
