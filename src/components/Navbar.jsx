import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <a href="#">HTML</a>{" "}
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
