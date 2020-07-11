import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const sendForm = () => {
          store.dispatch(sendMessageCreator());
        };
        let onPostChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
