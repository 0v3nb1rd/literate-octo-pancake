import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-content">
          <Route component={Main} path="/home" />
          <Route component={Dialogs} path="/profile" />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
