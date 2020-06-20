import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PostInfo from "./PostsInfo/PostsInfo";

const Profile = () => {
  return (
    <div className={s.profile}>
      <PostInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
