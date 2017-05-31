import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ListShowcaseItem = ({ title, listId, onClick }) => (
  <a className="ListShowcaseItem" onClick={onClick}>
    <div className="ListShowcaseItem__Content">
      <h3>{title}</h3>
      <div>
        <label style={{ display: 'block' }}><input type="checkbox" /> Elo</label>
        <label style={{ display: 'block' }}><input type="checkbox" /> Elo</label>
        <label style={{ display: 'block' }}><input type="checkbox" /> Elo</label>
        <label style={{ display: 'block' }}><input type="checkbox" /> Elo</label>
        <label style={{ display: 'block' }}><input type="checkbox" /> Elo</label>
      </div>
    </div>
  </a>
);

ListShowcaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListShowcaseItem;
