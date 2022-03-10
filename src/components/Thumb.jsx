import React from 'react';
import PropTypes from 'prop-types';

function Thumb({ imageSrc, title }) {
  return (
    <div className="thumb">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default Thumb;

Thumb.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
