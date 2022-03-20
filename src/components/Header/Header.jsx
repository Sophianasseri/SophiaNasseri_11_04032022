import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={logo} alt="" />
      <nav>
        <ul className={styles.navigation}>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : '')}
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : '')}
              to="/about"
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
