import React from "react";
import s from "./Profile.module.css";
// import MyPosts from "./MyPosts/MyPosts";
import PostInfo from "./PostsInfo/PostsInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div className={s.profile}>
      <PostInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
