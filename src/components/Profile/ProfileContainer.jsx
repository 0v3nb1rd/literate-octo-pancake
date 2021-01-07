import React from 'react';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../redux/profile-reducer';
import Profile from './Profile';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.id || 11872;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`) //ID-> 11872
      .then((resp) => {
        this.props.setUserProfile(resp.data);
      });
  }
  render() {
    return <Profile profile={this.props.profile} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
const mapDispatchToProps = {
  setUserProfile: setUserProfileAC,
};

const ShowTheLocationWithRouter = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTheLocationWithRouter);
