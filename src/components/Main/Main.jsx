import React from "react";
import m from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
  return (
    <main className={m.main}>
      <img
        src="https://www.imgacademy.co.kr/themes/custom/imgacademy/images/helpbox-contact.jpg"
        alt="backgorund"
        className={m.mainImg}
      />
      <MyPosts />
    </main>
  );
};

export default Main;
