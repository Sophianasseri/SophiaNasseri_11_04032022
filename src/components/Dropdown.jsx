import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown-item">
      <div
        className="dropdown-title"
        role="button"
        tabIndex="0"
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => setIsActive(!isActive)}
      >
        <h2>{title}</h2>
        <div>{isActive ? <span>&#8963;</span> : <span>&#8964;</span>}</div>
        {isActive && <div className="dropdown-content">{content}</div>}
      </div>
    </div>
  );
}
export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};
