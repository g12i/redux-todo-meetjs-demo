import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ListShowcase = ({ lists }) => (
  <ul className="ListShowcase">
    {lists.map(({ id, title }) => (
      <li key={id} className="ListShowcase__Item">
        <h3>{title}</h3>
      </li>
    ))}
  </ul>
);

ListShowcase.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired
};

export default ListShowcase;
