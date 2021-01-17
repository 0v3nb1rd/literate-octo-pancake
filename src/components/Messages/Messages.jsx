import React from 'react';
import css from './Messages.module.css';
import UserLi from './UserLi/UserLi';
import MessageLi from './MessageLi/MessageLi';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../UI/Forms/FormsControl';
import { maxLength, required } from '../../helpers/validators';

const maxlength10 = maxLength(10);
let MsgForm = (props) => {
  return (
    <form className={css.addPost} onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Add post</legend>
        <Field
          name="text"
          rows="4"
          placeholder="Add some text..."
          validate={[required, maxlength10]}
          component={TextArea}
        />
        <button>add post</button>
      </fieldset>
    </form>
  );
};

MsgForm = reduxForm({ form: 'msgPage' })(MsgForm);

const Messages = (props) => {
  let onAddMessage = (formData) => {
    props.addNewMessage(formData.text);
  };

  return (
    <div className={css.messages}>
      <h1 className="title">Mesaages:</h1>
      <div className={`container ${css.inner}`}>
        <ul className={`${css.box} ${css.boxFirst}`}>
          {props.state.dataUsers.map((itm) => (
            <UserLi name={itm.name} key={itm.id} />
          ))}
        </ul>
        <MsgForm onSubmit={onAddMessage} />
        <div className={`${css.box} ${css.boxSec}`}>
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
