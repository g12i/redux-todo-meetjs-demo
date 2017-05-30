import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

const ListShowcaseItem = ({ title }) => (
  <div className="ListShowcaseItem">
    <div className="ListShowcaseItem__Content">
      <h3>{title}</h3>
    </div>
  </div>
);

ListShowcaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
};

export default ListShowcaseItem;
