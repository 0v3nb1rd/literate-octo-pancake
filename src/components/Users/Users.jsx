import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Users.module.css';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <h1 className={css.h1}>Users page</h1>
      <ul className={css.pagination}>
        {pages.map((itm) => (
          <li
            onClick={(e) => props.onPageChanged(itm)}
            key={itm}
            className={props.currentPage === itm ? css.active : undefined}
          >
            {itm}
          </li>
        ))}
      </ul>
      <ul className={css.list}>
        {props.users.map((usr) => (
          <li className={css.itm} key={usr.id}>
            <NavLink to={`/profile/${usr.id}`}>
              <img src={usr.photos.small} alt={usr.name} />
            </NavLink>
            <div className={css.info}>
              <span className={css.userName}>{usr.name}</span>
              {usr.followed ? (
                <button onClick={() => props.unfollow(usr.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(usr.id)}>Follow</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
