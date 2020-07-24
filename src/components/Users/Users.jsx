import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/avatar.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map((p) => (
          <button
            key={p}
            className={props.currentPage === p ? s.selectedPage : ""}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <ul>
        {props.users.map((u) => (
          <li key={u.id} className={s.user}>
            <div className={s.user_left}>
              <img
                src={u.photos.small != null ? u.photos.small : avatar}
                alt="Avatar"
              />
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
            <div className={s.user_right}>
              <span className={s.userName}>{u.name}</span>
              <span className={s.userStatus}>{u.status}</span>
              <div className={s.user_location}>
                {"u.location.country"}
                <span>{"u.location.city"}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
