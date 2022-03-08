import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="" />
        <nav>
          <ul>
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/about">
              <li>À Propos</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
