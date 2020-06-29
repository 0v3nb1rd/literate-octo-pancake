const store = {
  _state: {
    profilePage: {
      postData: [
        { id: "1", message: "Hello there, this is the first post" },
        { id: "2", message: "This is the second post" },
        { id: "3", message: "Some different text" },
        { id: "4", message: "Hello there, this is the first post" },
        { id: "5", message: "Testing messages" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Nazar" },
        { id: 2, name: "Ira" },
        { id: 3, name: "Ylia" },
        { id: 4, name: "Oleg" },
        { id: 5, name: "Volodya" },
        { id: 6, name: "Ivan" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "It is a test" },
        { id: 4, message: "Hello World" },
      ],
    },
  },
  _callSubscriber() {
    console.log("no subscribers");
  },
  _addPost() {
    const newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newTxt) {
    this._state.profilePage.newPostText = newTxt;
    this._callSubscriber(this._state);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.newText);
    }
  },
};
export default store;

window.store = store;
