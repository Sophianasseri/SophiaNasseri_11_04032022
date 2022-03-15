import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './dropdown.module.css';

function Dropdown({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.toggle}
        role="button"
        tabIndex="0"
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => setIsActive(!isActive)}
      >
        <h2 className={styles.title}>{title}</h2>
        <div>
          {isActive ? (
            <span className={styles.chevron}>
              <i className="fa">&#xf077;</i>
            </span>
          ) : (
            <span className={styles.chevron}>
              <i className="fa">&#xf078;</i>
            </span>
          )}
        </div>
      </div>
      {isActive && (
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};
