import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={s.item}>
      <a href="#">
        <span>{props.number}</span>

        <img
          src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1"
          alt="post"
        />
        <span>{props.message}</span>
      </a>
    </li>
  );
};

export default Post;
