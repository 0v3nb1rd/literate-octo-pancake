import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import {
  followUserAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowUserAC,
  setUserCountAC,
  fetchingDataAC,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../UI/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchingToggle(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items);
        this.props.setTotalCount(resp.data.totalCount);
        this.props.fetchingToggle(false);
      });
  }
  onPageChanged = (itm) => {
    this.props.fetchingToggle(true);
    this.props.setPage(itm);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${itm}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items);
        this.props.fetchingToggle(false);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : undefined}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

/*-----------------// ? Old syntax ActionCreators //-------------*/
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUsers(users) {
//       dispatch(setUsersAC(users));
//     },
//     follow(user) {
//       dispatch(followUserAC(user));
//     },
//     unfollow(user) {
//       dispatch(unfollowUserAC(user));
//     },
//     setPage(page) {
//       dispatch(setCurrentPageAC(page));
//     },
//     setTotalCount(totalCount) {
//       dispatch(setUserCountAC(totalCount));
//     },
//     fetchingToggle(fetch) {
//       dispatch(fetchingDataAC(fetch));
//     },
//   };
// };

/*-----------------// ? New syntax ActionCreators //-------------*/
const mapDispatchToProps = {
  setUsers: setUsersAC,
  follow: followUserAC,
  unfollow: unfollowUserAC,
  setPage: setCurrentPageAC,
  setTotalCount: setUserCountAC,
  fetchingToggle: fetchingDataAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
