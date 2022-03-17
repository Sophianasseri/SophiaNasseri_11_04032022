import React from 'react';
import PropTypes from 'prop-types';
import styles from './host.module.css';

function Host({ name, imageScr }) {
  return (
    <div className={styles.host}>
      <p className={styles.name}>{name}</p>
      <img className={styles.image} src={imageScr} alt={name} />
    </div>
  );
}

export default Host;

Host.propTypes = {
  name: PropTypes.string.isRequired,
  imageScr: PropTypes.string.isRequired,
};
