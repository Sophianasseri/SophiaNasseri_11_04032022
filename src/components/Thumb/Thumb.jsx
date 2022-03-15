import React from 'react';
import PropTypes from 'prop-types';
import styles from './thumb.module.css';

function Thumb({ imageSrc, title }) {
  return (
    <div className={styles.thumb}>
      <img className={styles.image} src={imageSrc} alt={title} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default Thumb;

Thumb.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
