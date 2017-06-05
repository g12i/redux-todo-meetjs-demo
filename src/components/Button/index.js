import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const resolveClassName = dark => `Button Button--${dark ? 'dark' : 'default'}`;

const Button = ({ children, onClick, dark }) => (
  <button className={resolveClassName(dark)} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  dark: PropTypes.bool,
};

Button.defaultProps = {
  onClick: v => v,
  dark: false,
}

export default Button;
