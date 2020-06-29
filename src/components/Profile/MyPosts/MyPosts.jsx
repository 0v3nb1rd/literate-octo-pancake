import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // console.log(props);
  const postElement = props.profilePage.postData.map((post) => (
    <Post number={post.id} message={post.message} key={post.id} />
  ));
  const newPostElement = React.createRef();

  const addPost = () => {
    props.store.dispatch({ type: "ADD-POST" });
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    const action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.store.dispatch(action);
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
