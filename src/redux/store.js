import profileReducer from './profile-reducer';
import messageReducer from './messages-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-NEW-TEXT';

const ADD_MESSAGE_TXT = 'ADD-MESSAGE-TXT';
const UPDATE_MESSAGE_TXT = 'UPDATE-MESSAGE-TXT';

const store = {
  _state: {
    profile: {
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
    },
    messages: {
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
    },
  },
  _callSubscriber() {
    debugger;
    console.log('no subscribers');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messageReducer(this._state.messages, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
