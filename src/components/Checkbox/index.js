import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Icon, { check, box } from '../Icon';

const Checkbox = ({ checked, onChange = null, readOnly = false }) => (
  <label className="Checkbox">
    <Icon icon={checked ? check : box} alt={checked ? 'checked' : 'not checked'} />
    <input type="checkbox" checked={checked} onChange={onChange} readOnly={readOnly} />
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default Checkbox;
