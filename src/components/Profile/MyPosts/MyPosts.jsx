import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let onPostChange = (e) => {
    props.updateText(e.target.value);
  };
  let onAddPost = (e) => {
    e.preventDefault();
    props.addNewPost();
  };
  return (
    <div className="container">
      <form className={css.addPost}>
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
      </form>

      <ul className={css.posts}>
        {props.state.dataPosts.map((el) => (
          <Post txt={el.txt} key={el.id} />
        ))}
      </ul>
    </div>
  );
};

export default MyPosts;
