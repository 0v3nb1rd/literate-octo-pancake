import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onPostChange = (text) => {
          let action = onPostChangeActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            addPost={addPost}
            updatePostsText={onPostChange}
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
