import * as axios from 'axios';
const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'API-KEY': '91b28e23-6675-48f6-858c-4652cb06027a' },
});

export const UsersAPI = {
  getUsers(page = 1, pageSize = 5) {
    return instance
      .get(`users?page=${page}&count=${pageSize}`)
      .then((resp) => resp.data);
  },
};

export const FollowAPI = {
  followUser(id = null) {
    return instance.post(`follow/${id}`).then((resp) => resp.data);
  },
  unfollowUser(id = null) {
    return instance.delete(`follow/${id}`).then((resp) => resp.data);
  },
};

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`);
  },
};

export const ProfileAPI = {
  getProfile(userID) {
    return axios.get(`${baseURL}profile/${userID}`);
  },
};
