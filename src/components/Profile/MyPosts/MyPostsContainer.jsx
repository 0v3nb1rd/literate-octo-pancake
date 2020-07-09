import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      addPost={addPost}
      updatePostsText={onPostChange}
      posts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
