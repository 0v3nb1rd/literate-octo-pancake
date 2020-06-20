import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={s.userItem}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

const Messages = (props) => {
  return <li className={s.userMessage}>{props.message}</li>;
};

const Dialogs = () => {
  return (
    <div className={s.content}>
      <section className={s.users}>
        <ul className={s.userList}>
          <DialogItem id="1" name="Nazar" />
          <DialogItem id="2" name="Ira" />
          <DialogItem id="3" name="Ylia" />
          <DialogItem id="4" name="Oleg" />
          <DialogItem id="5" name="Volodya" />
          <DialogItem id="6" name="Ivan" />
        </ul>
      </section>
      <section className={s.messages}>
        <ul>
          <Messages message="Hello" />
          <Messages message="How are you?" />
          <Messages message="I'm fine thank you." />
        </ul>
      </section>
    </div>
  );
};

export default Dialogs;
