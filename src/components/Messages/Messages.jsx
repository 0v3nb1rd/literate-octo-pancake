import React from 'react';
import css from './Messages.module.css';

import UserLi from './UserLi/UserLi';
import MessageLi from './MessageLi/MessageLi';
import { Redirect } from 'react-router-dom';

const Messages = (props) => {
  let onAddMessage = (e) => {
    e.preventDefault();
    props.addNewMessage();
  };
  let onMessageChange = (e) => {
    props.updateText(e.target.value);
  };
  if (!props.auth.isAuth) return <Redirect to="/login" />;
  return (
    <div className={css.messages}>
      <h1 className="title">Mesaages:</h1>
      <div className={`container ${css.inner}`}>
        <ul className={`${css.box} ${css.boxFirst}`}>
          {props.state.dataUsers.map((itm) => (
            <UserLi name={itm.name} key={itm.id} />
          ))}
        </ul>

        <div className={`${css.box} ${css.boxSec}`}>
          <form className={css.addPost}>
            <fieldset>
              <legend>Add post</legend>
              <textarea
                rows="4"
                onChange={onMessageChange}
                value={props.state.newTxt}
                placeholder="Add some text..."
              />
              <input onClick={onAddMessage} type="submit" value="add post" />
            </fieldset>
          </form>

          <ul className={css.list}>
            {props.dataMsg.map((itm) => (
              <MessageLi msg={itm.msg} key={itm.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Messages;
