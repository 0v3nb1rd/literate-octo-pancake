import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PostInfo from "./PostsInfo/PostsInfo";

const Profile = (props) => {
  // console.log(props);
  return (
    <div className={s.profile}>
      <PostInfo />
      <MyPosts profilePage={props.state.profilePage} store={props.store} />
    </div>
  );
};

export default Profile;
