import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messages: messageReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers);

export default store;

window.store = store.getState();
