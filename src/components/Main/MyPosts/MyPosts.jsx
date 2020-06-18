import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <section>
      <ul className={s.list}>
        <Post number="1" message="hello there, this is the first post" />
        <Post number="2" message="This is the second post" />
        <Post number="3" message="some different text" />
      </ul>
    </section>
  );
};

export default MyPosts;
