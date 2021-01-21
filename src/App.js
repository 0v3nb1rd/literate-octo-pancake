import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initApp } from './redux/app-reducer';
import Preloader from './components/UI/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    // console.log(' initialised:', this.props.initialized);
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="App">
        <HeaderContainer />
        <main className="main">
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:id?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
const mapDispatchToProps = {
  initApp,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(App);
