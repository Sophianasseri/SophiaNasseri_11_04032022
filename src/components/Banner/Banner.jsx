import React from 'react';
import PropTypes from 'prop-types';
import styles from './banner.module.css';

function Banner({ imageSrc, children }) {
  return (
    <section className={styles.banner}>
      <img className={styles.image} src={imageSrc} alt="" />
      {children}
    </section>
  );
}

export default Banner;

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Banner.defaultProps = {
  children: '',
};
