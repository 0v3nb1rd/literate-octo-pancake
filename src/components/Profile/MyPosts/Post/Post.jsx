import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
  // console.log(props);
  return (
    <li className={css.itm}>
      <img
        src="https://p7.hiclipart.com/preview/609/846/439/discord-computer-icons-logo-computer-software-avatar.jpg"
        alt="figura"
      />
      <span>{props.txt}</span>
    </li>
  );
};

export default Post;
