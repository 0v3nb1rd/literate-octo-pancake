import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const postsElements = props.posts.map((post) => (
    <Post number={post.id} message={post.message} key={post.id} />
  ));
  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostsText(text);
  };

  return (
    <section className={s.myPosts}>
      <div className={s.addPost}>
        <textarea
          className={s.textArea}
          rows="5"
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
        />
        <button className={s.btn} type="submit" onClick={addPost}>
          submit
        </button>
      </div>
      <ul className={s.postList}>{postsElements}</ul>
    </section>
  );
};

export default MyPosts;
