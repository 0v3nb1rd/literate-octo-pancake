import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserDataAC } from '../../redux/auth-reducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((resp) => {
        // console.log(resp.data.data);
        this.props.setUserData(resp.data.data);
      });
  }
  render() {
    console.log(this.props);
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
  setUserData: setUserDataAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
