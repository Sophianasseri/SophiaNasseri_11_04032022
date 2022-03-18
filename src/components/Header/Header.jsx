import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={logo} alt="" />
      <nav>
        <ul className={styles.navigation}>
          <li>
            <Link className={styles.link} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
