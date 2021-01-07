import React from 'react';
// import logo from '/public/images/newspaper.svg';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={css.header}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={css.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" activeClassName={css.active}>
            Message
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={css.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={css.active}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={css.active}>
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={css.active}>
            Users
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
