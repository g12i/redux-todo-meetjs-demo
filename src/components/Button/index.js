import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const resolveClassName = theme => `Button Button--${theme}`;

const Button = ({ children, onClick, theme }) => (
  <button className={resolveClassName(theme)} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'blue']),
};

Button.defaultProps = {
  onClick: v => v,
  theme: 'default',
}

export default Button;
