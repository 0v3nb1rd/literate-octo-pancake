import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
// import * as axios from 'axios';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.id || 11872;
    this.props.getUserProfile(userID);
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`) //ID-> 11872
    //   .then((resp) => {
    //     this.props.setUserProfile(resp.data);
    //   });
  }
  render() {
    if (!this.props.auth.isAuth) return <Redirect to="/login" />;
    return <Profile profile={this.props.profile} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    auth: state.auth,
  };
};
const mapDispatchToProps = {
  // setUserProfile: setUserProfileAC,
  getUserProfile,
};

const ShowTheLocationWithRouter = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTheLocationWithRouter);
