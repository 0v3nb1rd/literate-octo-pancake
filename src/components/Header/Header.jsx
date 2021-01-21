import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  // console.log(props);
  // alert(props.isAuth);
  return (
    <header className={css.header}>
      <div className={css.headerInfo}>
        <div className={css.picture}>
          <img src="https://picsum.photos/100/100" alt="profile" />
        </div>
        <p className={css.name}>
          {props.login} <span>{props.email}</span>
        </p>
        {!props.isAuth ? (
          <button>Log-in</button>
        ) : (
          <button onClick={() => props.logoutUser()}>Log-out</button>
        )}
      </div>
      <ul className={css.hearedNav}>
        <li>
          <NavLink to="/login" activeClassName={css.active}>
            Login
          </NavLink>
        </li>
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
