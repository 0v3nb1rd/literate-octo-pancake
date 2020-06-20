import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settngs from "./components/Settngs/Settngs";
import Music from "./components/Music/Music";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-content">
          <Route component={Profile} path="/profile" />
          <Route component={Dialogs} path="/dialogs" />
          <Route component={News} path="/news" />
          <Route component={Music} path="/music" />
          <Route component={Settngs} path="/settings" />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
