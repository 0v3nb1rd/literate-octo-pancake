import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.auth.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  const mapStateToPropsForRedirect = (state) => ({
    auth: state.auth,
  });
  let connectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return connectAuthRedirectComponent;
};
