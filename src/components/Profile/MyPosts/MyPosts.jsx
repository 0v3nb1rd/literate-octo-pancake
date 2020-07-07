import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  // console.log(props);
  const postElement = props.profilePage.postData.map((post) => (
    <Post number={post.id} message={post.message} key={post.id} />
  ));
  const newPostElement = React.createRef();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.store.dispatch(onPostChangeActionCreator(text));
  };

  return (
    <section className={s.myPosts}>
      <div className={s.addPost}>
        <textarea
          className={s.textArea}
          rows="5"
          onChange={onPostChange}
          value={props.profilePage.newPostText}
          ref={newPostElement}
        />
        <button className={s.btn} type="submit" onClick={addPost}>
          submit
        </button>
      </div>
      <ul className={s.postList}>{postElement}</ul>
    </section>
  );
};

export default MyPosts;
