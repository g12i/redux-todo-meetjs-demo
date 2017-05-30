import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ children, onClick }) => (
  <button
    className="Button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: v => v,
}

export default Button;
