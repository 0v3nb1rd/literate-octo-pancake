import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Dialogs
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/music" activeClassName={s.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/settings" activeClassName={s.activeLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
