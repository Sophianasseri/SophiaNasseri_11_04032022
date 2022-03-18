/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './rating.module.css';

function Rating({ rateValue }) {
  const stars = Array.from({ length: 5 }, () => <i className="fa">&#xf005;</i>);
  return (
    <div className={styles.rating}>
      {stars.map((star, index) => (
        <span
          key={index}
          className={index < rateValue ? styles.full : styles.empty}
        >
          {star}
        </span>
      ))}
    </div>
  );
}

export default Rating;

Rating.propTypes = {
  rateValue: PropTypes.string.isRequired,
};
