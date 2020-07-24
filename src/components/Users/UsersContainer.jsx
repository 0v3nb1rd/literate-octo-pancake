import React from "react";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    // console.log(this.props.isFetching);
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          // isFeaching={this.isFeaching}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNum) => {
      dispatch(setCurrentPageAC(pageNum));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
