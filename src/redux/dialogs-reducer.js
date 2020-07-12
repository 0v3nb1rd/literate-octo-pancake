const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
  dialogs: [
    { id: 1, name: "Nazar" },
    { id: 2, name: "Ira" },
    { id: 3, name: "Ylia" },
    { id: 4, name: "Oleg" },
    { id: 5, name: "Volodya" },
    { id: 6, name: "Ivan" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "It is a test" },
    { id: 4, message: "Hello World" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessage = {
        id: 6,
        message: state.newMessageBody,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...stateCopy.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
