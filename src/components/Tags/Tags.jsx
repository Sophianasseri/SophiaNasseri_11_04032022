import React from 'react';
import PropTypes from 'prop-types';
import styles from './tags.module.css';

function Tags({ content }) {
  return <li className={styles.tag}>{content}</li>;
}

export default Tags;

Tags.propTypes = {
  content: PropTypes.string.isRequired,
};
