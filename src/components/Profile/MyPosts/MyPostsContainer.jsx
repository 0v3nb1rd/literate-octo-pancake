import { connect } from 'react-redux';
import {
  addPostActionCreator,
  // updateTextCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    state: state.profilePage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // updateText(txt) {
    //   dispatch(updateTextCreator(txt));
    // },
    addNewPost(formData) {
      dispatch(addPostActionCreator(formData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
