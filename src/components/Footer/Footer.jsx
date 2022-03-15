import React from 'react';
import logoFooter from '../../assets/logoFooter.png';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img className={styles.image} src={logoFooter} alt="" />
        <p className={styles.copyright}>@2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
