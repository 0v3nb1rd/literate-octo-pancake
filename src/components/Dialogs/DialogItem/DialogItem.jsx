import React from "react";
import s from ".././Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className={s.userItem}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;
