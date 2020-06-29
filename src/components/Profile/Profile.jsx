import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PostInfo from "./PostsInfo/PostsInfo";

const Profile = (props) => {
  // console.log(props);
  return (
    <div className={s.profile}>
      <PostInfo />
      <MyPosts
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        addPost={props.store.addPost.bind(props.store)}
        updateNewPostText={props.store.updateNewPostText.bind(props.store)}
      />
    </div>
  );
};

export default Profile;
