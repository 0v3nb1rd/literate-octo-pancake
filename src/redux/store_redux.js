import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './messages-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messages: messageReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;

window.store = store.getState();
