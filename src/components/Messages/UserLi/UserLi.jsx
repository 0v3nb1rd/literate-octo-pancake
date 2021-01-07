import React from 'react';

import css from './UserLi.module.css';

const UserLi = (props) => {
  return (
    <li className={css.userBar}>
      <a className={css.link}>
        <img
          src="https://www.pinclipart.com/picdir/middle/157-1577650_by-oksmith-thinking-girl-cartoon-png-clipart.png"
          alt="figua"
        />
      </a>
      <div className={css.info}>
        <span>
          <i className="fa fa-circle"></i>
        </span>
        <span>
          <i className="fa fa-heart"></i>
        </span>
      </div>
      <span className={css.name}>{props.name}</span>
    </li>
  );
};

export default UserLi;
