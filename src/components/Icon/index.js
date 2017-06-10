import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export { default as check } from './check.svg';
export { default as cancel } from './cancel.svg';
export { default as plus } from './plus.svg';
export { default as box } from './box.svg';

const Icon = ({ icon, alt }) => <span className="Icon"><img src={icon} alt={alt} /></span>

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;