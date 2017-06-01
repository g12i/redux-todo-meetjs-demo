import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ListShowcaseItem from '../ListShowcaseItem';
import './style.css';

const ListShowcase = ({ lists, onClickListItem, onClickAddNewList }) => (
  <div className="ListShowcase">
    <div className="ListShowcase__List">
      {lists.map(props => (
        <ListShowcaseItem key={props.id} onClick={onClickListItem} {...props} />
      ))}
    </div>
    <div className="ListShowcase__ButtonContainer">
      <Button onClick={onClickAddNewList}>Add new</Button>
    </div>
  </div>
);

ListShowcase.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onClickListItem: PropTypes.func.isRequired,
  onClickAddNewList: PropTypes.func.isRequired,
};

export default ListShowcase;
