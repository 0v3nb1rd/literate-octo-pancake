import React from "react";
import s from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
  return (
    <div className={s.home}>
      <img
        src="https://www.imgacademy.co.kr/themes/custom/imgacademy/images/helpbox-contact.jpg"
        alt="backgorund"
        className={s.homeImg}
      />
      <MyPosts />
    </div>
  );
};

export default Main;
