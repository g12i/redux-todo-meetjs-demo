import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ListShowcaseItem from '../ListShowcaseItem';
import './style.css';

const ListShowcase = ({ lists }) => (
  <div className="ListShowcase">
    <div className="ListShowcase__List">
      {lists.map(({ id, title }) => (
        <ListShowcaseItem title={title} listId={id} key={id} />
      ))}
    </div>
    <div className="ListShowcase__ButtonContainer">
      <Button>Add new</Button>
    </div>
  </div>
);

ListShowcase.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired
};

export default ListShowcase;
