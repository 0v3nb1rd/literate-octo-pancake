import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState();
//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         const onPostChange = (text) => {
//           let action = onPostChangeActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             addPost={addPost}
//             updatePostsText={onPostChange}
//             posts={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updatePostsText: (text) => {
      let action = onPostChangeActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
