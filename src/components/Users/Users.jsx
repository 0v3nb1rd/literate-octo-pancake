import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://mosgorzdrav.ru/uploads/staff/d4e1787b-1497868489.jpg",
        fullName: "Andrey",
        status: "I'm a big boss",
        location: {
          country: "Russia",
          city: "Piter",
        },
        followed: true,
      },
      {
        id: 2,
        fullName: "Valera",
        photoUrl:
          "https://www.meme-arsenal.com/memes/d1a9c2974823d2c1503b1f3dafc12a6f.jpg",
        status: "Hello there, this is the first post",
        location: {
          country: "Belarus",
          city: "Minsk",
        },
        followed: false,
      },
      {
        id: 3,
        fullName: "Nazar",
        photoUrl: "https://www.pisni.org.ua/files/010/002335_nazar_savko.jpg",
        status: "Hi there",
        location: {
          country: "Ukraine",
          city: "Kyiv",
        },
        followed: false,
      },
      {
        id: 4,
        fullName: "Ivan",
        photoUrl:
          "https://high.itstep.org/wp-content/uploads/2017/06/ivanets384x500.jpg",
        status: "Let's go go go",
        location: {
          country: "Ukraine",
          city: "Kharkiv",
        },
        followed: false,
      },
      {
        id: 5,
        fullName: "John",
        photoUrl: "https://mdundo.com/media/articles/1582021339_5707_b.jpg",
        status: "Couden’t be better",
        location: {
          country: "Russia",
          city: "Moscow",
        },
        followed: false,
      },
    ]);
  }

  return (
    <ul>
      {props.users.map((u) => (
        <li key={u.id} className={s.user}>
          <div className={s.user_left}>
            <img src={u.photoUrl} alt="Avatar" />
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>Follow</button>
            )}
          </div>
          <div className={s.user_right}>
            <span className={s.userName}>{u.fullName}</span>
            <span className={s.userStatus}>{u.status}</span>
            <div className={s.user_location}>
              {u.location.country}
              <span>{u.location.city}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
