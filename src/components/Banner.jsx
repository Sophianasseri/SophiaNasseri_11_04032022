import React from 'react';
import PropTypes from 'prop-types';

function Banner({ imageSrc, children }) {
  return (
    <section className="banner">
      <img src={imageSrc} alt="" />
      {children}
    </section>
  );
}

export default Banner;

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
