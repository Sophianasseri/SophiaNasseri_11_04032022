/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';

function Carousel({ imageScr }) {
  const [currentImg, setCurrentImg] = useState(0);
  const slideLength = imageScr.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === slideLength - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? slideLength - 1 : currentImg - 1);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.prev} ${slideLength === 1 ? styles.hidden : ''}`}
        onClick={prevSlide}
      >
        <i className="fa">&#xf053;</i>
      </button>
      <button
        className={`${styles.next} ${slideLength === 1 ? styles.hidden : ''}`}
        onClick={nextSlide}
      >
        <i className="fa">&#xf054;</i>
      </button>

      <img className={styles.image} src={imageScr[currentImg]} alt="" />
    </div>
  );
}

export default Carousel;

Carousel.propTypes = {
  imageScr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
