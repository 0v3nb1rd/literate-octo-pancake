import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} key={d.id} />
  ));
  let messagesElements = props.messages.map((m) => (
    <Messages message={m.message} key={m.id} />
  ));

  let sendForm = () => {
    props.sendForm();
  };

  let onPostChange = (e) => {
    const body = e.target.value;
    props.updatePostsText(body);
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
          value={props.newMessageBody}
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
