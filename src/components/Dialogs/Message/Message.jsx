import React from "react";
import s from ".././Dialogs.module.css";

const Messages = (props) => {
  return <li className={s.userMessage}>{props.message}</li>;
};

export default Messages;
