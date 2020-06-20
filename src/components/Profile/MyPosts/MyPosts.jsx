import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <section className={s.myPosts}>
      <div className={s.addPost}>
        <textarea className={s.textArea} name="texts" id="" rows="5"></textarea>
        <button className={s.btn} type="submit">
          submit
        </button>
      </div>
      <ul className={s.postList}>
        <Post number="1" message="hello there, this is the first post" />
        <Post number="2" message="This is the second post" />
        <Post number="3" message="some different text" />
      </ul>
    </section>
  );
};

export default MyPosts;
