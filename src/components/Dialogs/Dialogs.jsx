import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  // console.log(props);

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} key={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Messages message={m.message} key={m.id} />
  ));

  // const newInput = React.createRef();
  const sendForm = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onPostChange = (e) => {
    const body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.content}>
      <section className={s.users}>
        <ul className={s.userList}>{dialogsElements}</ul>
      </section>

      <section className={s.messages}>
        <ul>{messagesElements}</ul>
      </section>
      <div className="test">
        <textarea
          onChange={onPostChange}
          value={props.state.newMessageBody}
          placeholder="Enter your message"
        ></textarea>
        <button onClick={sendForm} type="submit">
          send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
