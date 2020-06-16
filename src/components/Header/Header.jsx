import React from "react";
import h from "./Header.module.css";

const Header = () => {
  return (
    <header className={h.header}>
      <img
        src="https://hrhelpline.ru/wp-content/uploads/2018/02/Starbucks-Logo-HD-300x287.png"
        className="logo"
        alt="logo"
      />
    </header>
  );
};

export default Header;
