import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Users.module.css';
import { FollowAPI } from '../../API/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(props);
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
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === usr.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, usr.id);
                    FollowAPI.unfollowUser(usr.id).then((resp) => {
                      if (resp.resultCode === 0) {
                        props.unfollow(usr.id);
                        props.toggleFollowingProgress(false, usr.id);
                      }
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === usr.id
                  )}
                  onClick={() => {
                    props.toggleFollowingProgress(true, usr.id);
                    FollowAPI.followUser(usr.id).then((resp) => {
                      if (resp.resultCode === 0) {
                        props.follow(usr.id);
                        props.toggleFollowingProgress(false, usr.id);
                      }
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
