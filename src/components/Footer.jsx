import React from 'react';
import logoFooter from '../assets/logoFooter.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoFooter} alt="" />
        <p>@2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
