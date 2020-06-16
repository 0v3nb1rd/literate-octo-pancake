import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <section>
      <ul className={s.list}>
        <Post />
        <Post />
        <Post />
      </ul>
    </section>
  );
};

export default MyPosts;
