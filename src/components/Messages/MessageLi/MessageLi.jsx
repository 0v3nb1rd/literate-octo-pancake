import React from 'react';
import css from './MessageLi.module.css';

const MessageLi = (props) => {
  // console.log(props);
  return <li className={css.msg}>{props.msg}</li>;
};

export default MessageLi;
