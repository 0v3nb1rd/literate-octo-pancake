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
  login({ email, password, rememberMe = false }) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const ProfileAPI = {
  getProfile(userID) {
    return axios.get(`${baseURL}profile/${userID}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};
