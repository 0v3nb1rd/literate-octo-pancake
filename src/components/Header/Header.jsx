import React from "react";
import h from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={h.header}>
      <NavLink to="/">
        <img
          src="https://hrhelpline.ru/wp-content/uploads/2018/02/Starbucks-Logo-HD-300x287.png"
          className="logo"
          alt="logo"
        />
      </NavLink>
    </header>
  );
};

export default Header;
