const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: 6,
      message: state.newPostText,
    };
    state.postData.push(newPost);
    state.newPostText = "";
    // this._callSubscriber(this._state);
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
    // this._callSubscriber(this._state);
  }

  return state;
};

export default profileReducer;
