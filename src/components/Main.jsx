import React from "react";
import m from "./Main.module.css";

const Main = () => {
  return (
    <main className={m.main}>
      <img
        src="https://www.imgacademy.co.kr/themes/custom/imgacademy/images/helpbox-contact.jpg"
        alt="image"
        className={m.mainImg}
      />
      <section className="postname"></section>
    </main>
  );
};

export default Main;
