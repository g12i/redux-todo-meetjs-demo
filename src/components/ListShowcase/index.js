import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import ListEditor from '../ListEditor';
import { addList } from '../../reducers/lists';
import './style.css';

const ListShowcase = ({ lists, onClickAddNewList }) => (
  <div className="ListShowcase">
    <div className="ListShowcase__List">
      {lists.map(list => (
        <div key={list.id} className="ListShowcaseItem">
          <div className="ListShowcaseItem__Content">
            <ListEditor {...list} />
          </div>
        </div>
      ))}
    </div>
    <div className="ListShowcase__ButtonContainer">
      <Button dark onClick={onClickAddNewList}>Add new</Button>
    </div>
  </div>
);

ListShowcase.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onClickAddNewList: PropTypes.func.isRequired,
};

export default connect(
  state => ({ lists: state.lists }),
  dispatch => ({ onClickAddNewList: () => dispatch(addList('TODO')) })
)(ListShowcase);
