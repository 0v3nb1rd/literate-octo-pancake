import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getUserProfile } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile();
    // AuthAPI.getAuth().then((resp) => this.props.setUserData(resp.data));
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
  };
};
const mapDispatchToProps = {
  // setUserData: setUserDataAC,
  getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
