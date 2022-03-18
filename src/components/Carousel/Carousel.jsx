/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';

function Carousel({ imageArr }) {
  const [currentImg, setCurrentImg] = useState(0);
  const slideLength = imageArr.length;

  const nextImg = () => {
    setCurrentImg(currentImg === slideLength - 1 ? 0 : currentImg + 1);
  };

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? slideLength - 1 : currentImg - 1);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.prev} ${slideLength === 1 ? styles.hidden : ''}`}
        onClick={prevImg}
      >
        <i className="fa">&#xf053;</i>
      </button>
      <button
        className={`${styles.next} ${slideLength === 1 ? styles.hidden : ''}`}
        onClick={nextImg}
      >
        <i className="fa">&#xf054;</i>
      </button>

      <img className={styles.image} src={imageArr[currentImg]} alt="" />
    </div>
  );
}

export default Carousel;

Carousel.propTypes = {
  imageArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
