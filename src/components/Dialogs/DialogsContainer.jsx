import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const sendForm = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onPostChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      messages={state.dialogsPage.messages}
      dialogs={state.dialogsPage.dialogs}
      newMessageBody={state.dialogsPage.newMessageBody}
      sendForm={sendForm}
      updatePostsText={onPostChange}
    />
  );
};

export default DialogsContainer;
