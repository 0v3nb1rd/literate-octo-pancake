import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="#">HTML</a>
        </li>
        <li>
          <a href="#">CSS/SCSS</a>
        </li>
        <li>
          <a href="#">JavaScript</a>
        </li>
        <li>
          <a href="#">React</a>
        </li>
        <li>
          <a href="#">Node</a>
        </li>

        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
