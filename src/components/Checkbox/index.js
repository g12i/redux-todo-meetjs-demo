import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Icon, { check, cancel } from '../Icon';

const Checkbox = ({ checked, onChange }) => (
  <label className="Checkbox">
    <Icon icon={checked ? check : cancel} alt={checked ? 'checked' : 'not checked'} />
    <input type="checkbox" checked={checked} onChange={onChange} />
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
