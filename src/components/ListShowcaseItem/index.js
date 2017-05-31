import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const THRESHOLD = 10;

const ListShowcaseItem = ({ title, listId, todos, onClick }) => {

  const hasMoreThanThreshold = todos.length > THRESHOLD;
  const uncompleted = todos.filter(({ completed }) => !completed);
  const completed = todos.filter(({ completed }) => completed);

  const uncompletedToDisplay = Math.min(THRESHOLD, uncompleted.length);
  const completedToDisplay = Math.min(THRESHOLD - uncompletedToDisplay, completed.length);

  return (
    <a className="ListShowcaseItem" onClick={onClick}>
      <div className="ListShowcaseItem__Content">
        <h3>{title}</h3>
        <div>
          {uncompleted.filter((v, i) => i < uncompletedToDisplay).map(({ completed, content, id }) => (
            <label className="ListShowcaseItem__Todo" key={id}>
              <input type="checkbox" checked={completed} readOnly />
              <span className="ListShowcaseItem__TodoContent">{content}</span>
            </label>
          ))}
          {completed.filter((v, i) => i < completedToDisplay).map(({ completed, content, id }) => (
            <label className="ListShowcaseItem__Todo ListShowcaseItem__Todo--Completed" key={id}>
              <input type="checkbox" checked={completed} readOnly />
              <span className="ListShowcaseItem__TodoContent">{content}</span>
            </label>
          ))}
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
