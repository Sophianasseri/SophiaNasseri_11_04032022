import React from 'react';
import logoFooter from '../assets/logoFooter.png';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <img src={logoFooter} alt="" />
        <p>@2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
