import React from 'react';
import { connect } from 'react-redux';
// import { UsersAPI } from '../../API/api';
import {
  // followUserAC,
  // setCurrentPageAC,
  // setUsersAC,
  // unfollowUserAC,
  // setUserCountAC,
  // fetchingDataAC,
  followInProgressAC,
  requestUsers,
  changePage,
  follow,
  unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../UI/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  // getUsers,
  getUserSuper,
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    // this.props.fetchingToggle(true);
    // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
    //   (resp) => {
    //     this.props.setUsers(resp.items);
    //     this.props.setTotalCount(resp.totalCount);
    //     this.props.fetchingToggle(false);
    //   }
    // );
  }
  onPageChanged = (itm) => {
    this.props.changePage(itm, this.props.pageSize);
    // this.props.fetchingToggle(true);
    // this.props.setPage(itm);
    // UsersAPI.getUsers(itm, this.props.pageSize).then((resp) => {
    //   this.props.setUsers(resp.items);
    //   this.props.fetchingToggle(false);
    // });
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
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('mapStateToProps Users');
  return {
    users: getUserSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
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
  // setUsers: setUsersAC,
  // follow: followUserAC,
  // unfollow: unfollowUserAC,
  // setPage: setCurrentPageAC,
  // setTotalCount: setUserCountAC,
  // fetchingToggle: fetchingDataAC,
  toggleFollowingProgress: followInProgressAC,
  requestUsers,
  changePage,
  follow,
  unfollow,
};

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  // withAuthRedirect
)(UsersContainer);
