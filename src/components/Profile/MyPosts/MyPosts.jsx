import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.postData.map((post) => (
    <Post number={post.id} message={post.message} key={post.id} />
  ));
  let newPostElement = React.createRef();

  const createPost = () => {
    let text = newPostElement.current.value;
    console.log(text);
  };
  return (
    <section className={s.myPosts}>
      <div className={s.addPost}>
        <textarea
          className={s.textArea}
          rows="5"
          ref={newPostElement}
        ></textarea>
        <button className={s.btn} type="submit" onClick={createPost}>
          submit
        </button>
      </div>
      <ul className={s.postList}>{postElement}</ul>
    </section>
  );
};

export default MyPosts;
