import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notFound.module.css';

function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.text}>
        <h2 className={styles.code}>404</h2>
        <p className={styles.message}>
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
      </div>
      <Link className={styles.link} to="/">
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  );
}

export default NotFound;
