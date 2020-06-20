import React from "react";
import s from "./PostsInfo.module.css";

const PostInfo = () => {
  return (
    <div className={s.postInfo}>
      <img
        src="https://www.imgacademy.co.kr/themes/custom/imgacademy/images/helpbox-contact.jpg"
        alt="backgorund"
        className={s.postImg}
      />
      <section className={s.postDesc}>ava + description</section>
    </div>
  );
};

export default PostInfo;
