import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} key={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Messages message={m.message} key={m.id} />
  ));

  const newInput = React.createRef();
  const sendForm = () => {
    let text = newInput.current.value;
    alert("Succes");
    console.log(text);
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
        <textarea ref={newInput} cols="30" rows="10"></textarea>
        <button onClick={sendForm} type="submit">
          send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
