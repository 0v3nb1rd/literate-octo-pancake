import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settngs from "./components/Settngs/Settngs";
import Music from "./components/Music/Music";

const App = (props) => {
  // console.log(props);
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-content">
        <Route
          render={() => (
            <Profile state={props.store.getState()} store={props.store} />
          )}
          path="/profile"
        />
        <Route
          render={() => (
            <Dialogs
              state={props.store.getState().dialogsPage}
              store={props.store}
            />
          )}
          path="/dialogs"
        />
        <Route component={News} path="/news" />
        <Route component={Music} path="/music" />
        <Route component={Settngs} path="/settings" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
