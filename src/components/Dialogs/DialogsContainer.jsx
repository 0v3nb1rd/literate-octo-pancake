import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();

//         const sendForm = () => {
//           store.dispatch(sendMessageCreator());
//         };
//         let onPostChange = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };

//         return (
//           <Dialogs
//             messages={state.dialogsPage.messages}
//             dialogs={state.dialogsPage.dialogs}
//             newMessageBody={state.dialogsPage.newMessageBody}
//             sendForm={sendForm}
//             updatePostsText={onPostChange}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePostsText: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendForm: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
