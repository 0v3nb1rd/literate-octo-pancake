import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-content">
        {/* <Dialogs /> */}
        <Main />
      </main>
      <Footer />
    </div>
  );
};

export default App;
