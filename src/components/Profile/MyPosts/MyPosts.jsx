import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../helpers/validators';
import { TextArea } from '../../UI/Forms/FormsControl';
const maxLength20 = maxLength(20);

const msgForm = (props) => {
  return (
    <form className={css.addPost} onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Add post</legend>
        <Field
          name="text"
          placeholder="Add some text..."
          rows="4"
          component={TextArea}
          validate={[required, maxLength20]}
        />
        <button type="submit" className={css.submit}>
          add post
        </button>
      </fieldset>
    </form>
  );
};

const ReduxForm = reduxForm({ form: 'postMessage' })(msgForm);

const MyPosts = (props) => {
  // let onPostChange = (e) => {
  //   props.updateText(e.target.value);
  // };
  let onAddPost = (formData) => {
    // e.preventDefault();
    props.addNewPost(formData.text);
  };
  return (
    <div className="container">
      <ReduxForm onSubmit={onAddPost} />
      {/* <form className={css.addPost}>
        <fieldset>
          <legend>Add post</legend>
          <textarea
            rows="4"
            onChange={onPostChange}
            value={props.state.newTxt}
            placeholder="Add some text..."
          />
          <input onClick={onAddPost} type="submit" value="add post" />
        </fieldset>
      </form> */}

      <ul className={css.posts}>
        {props.state.dataPosts.map((el) => (
          <Post txt={el.txt} key={el.id} />
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
