import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={s.postItem}>
      <span className={s.postInfo}>
        <img
          src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1"
          alt="post"
        />
        <span>{props.number}</span>
      </span>

      <span className={s.postDescription}>{props.message}</span>
    </li>
  );
};

export default Post;
