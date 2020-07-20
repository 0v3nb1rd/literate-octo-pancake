import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import avatar from "../../assets/avatar.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
              className={this.props.currentPage === p ? s.selectedPage : ""}
              onClick={() => this.onPageChanged(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <ul>
          {this.props.users.map((u) => (
            <li key={u.id} className={s.user}>
              <div className={s.user_left}>
                <img
                  src={u.photos.small != null ? u.photos.small : avatar}
                  alt="Avatar"
                />
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
                    Follow
                  </button>
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
  }
}

export default Users;
