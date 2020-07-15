import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
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
