import React from "react";
import n from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <ul className={n.navList}>
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
