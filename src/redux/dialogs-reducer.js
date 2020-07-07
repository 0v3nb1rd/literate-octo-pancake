const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
    // this._callSubscriber(this._state);
  } else if (action.type === SEND_MESSAGE) {
    const newMessage = {
      id: 6,
      message: state.newMessageBody,
    };
    state.messages.push(newMessage);
    state.newMessageBody = "";
    // this._callSubscriber(this._state);
  }

  return state;
};

export default dialogsReducer;
