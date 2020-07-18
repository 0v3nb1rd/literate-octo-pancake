import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import avatar from "../../assets/avatar.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  }

  render() {
    return (
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
                <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
    );
  }
}

export default Users;
