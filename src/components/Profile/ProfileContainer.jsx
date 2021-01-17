import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profile-reducer';
import Profile from './Profile';
// import * as axios from 'axios';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.id || 13752;
    this.props.getUserProfile(userID);
    this.props.getStatus(userID);
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`) //ID-> 11872
    //   .then((resp) => {
    //     this.props.setUserProfile(resp.data);
    //   });
  }
  render() {
    return (
      <Profile
        profile={this.props.profile}
        {...this.props}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    // auth: state.auth,
  };
};
const mapDispatchToProps = {
  // setUserProfile: setUserProfileAC,
  getUserProfile,
  getStatus,
  updateStatus,
};

// const AuthRedirectComponnt = withAuthRedirect(ProfileContainer);

// const ShowTheLocationWithRouter = withRouter(AuthRedirectComponnt);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ShowTheLocationWithRouter);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
