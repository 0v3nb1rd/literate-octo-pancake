import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
