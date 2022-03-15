import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './header.module.css';

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.image} src={logo} alt="" />
        <nav>
          <ul className={styles.navigation}>
            <NavLink className={styles.link} to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink className={styles.link} to="/about">
              <li>À Propos</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
