import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const THRESHOLD = 7;

const ListShowcaseItem = ({ title, listId, todos, onClick }) => {

  const hasMoreThanThreshold = todos.length > THRESHOLD;
  const uncompleted = todos.filter(({ completed }) => !completed);
  const completed = todos.filter(({ completed }) => completed);

  const uncompletedToDisplay = Math.min(THRESHOLD, uncompleted.length);
  const completedToDisplay = Math.min(THRESHOLD - uncompletedToDisplay, completed.length);

  const Todo = ({ completed, content, id }) => (
    <label className={`ListShowcaseItem__Todo ListShowcaseItem__Todo--${(completed ? 'Completed' : 'UnCompleted')}`} key={id}>
      <input type="checkbox" checked={completed} readOnly />
      <span className="ListShowcaseItem__TodoContent">{content}</span>
    </label>
  );

  return (
    <a className="ListShowcaseItem" onClick={onClick}>
      <div className="ListShowcaseItem__Content">
        <h3>{title}</h3>
        <div>
          {uncompleted.filter((v, i) => i < uncompletedToDisplay).map(Todo)}
          {completed.filter((v, i) => i < completedToDisplay).map(Todo)}
          {hasMoreThanThreshold && <span className="ListShowcaseItem__HasMoreIndicator">...</span>}
        </div>
      </div>
    </a>
  );
};

ListShowcaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListShowcaseItem;
