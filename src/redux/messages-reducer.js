const ADD_MESSAGE_TXT = 'ADD-MESSAGE-TXT';

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
};
const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_TXT:
      return {
        ...state,
        dataMsg: [
          {
            id: Math.floor(Math.random() * 100),
            msg: action.text,
          },
          ...state.dataMsg,
        ],
      };
    default:
      return state;
  }
};

export const addMessageCreator = (text) => ({ type: ADD_MESSAGE_TXT, text });

export default messageReducer;
