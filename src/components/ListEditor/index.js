import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const ListPreview = ({ title, id, todos, onChangeTitle, onClickTodo, onChangeTodo, onAddTodo }) => {
  const uncompleted = todos.filter(({ completed }) => !completed);
  const completed = todos.filter(({ completed }) => completed);

  const Todo = ({ completed, content, id }) => (
    <div className={`ListPreview__Todo ListPreview__Todo--${(completed ? 'Completed' : 'UnCompleted')}`} key={id}>
      <input className="ListPreview__TodoCheckbox" type="checkbox" checked={completed} onClick={() => onClickTodo(id)} />
      <input className="ListPreview__TodoInput" type="text" value={content} onChange={e => onChangeTodo(id, e.target.value)} />
    </div>
  );

  const handleKeyDownOnNewTodo = e => {
    if (e.key !== 'Enter') {
      return;
    }
    onAddTodo(e.target.value);
  };

  return (
    <div className="ListPreview">
      <input type="text" className="ListPreview__TitleInput" onChange={e => onChangeTitle(e.target.value)} value={title} />
      <div>
        <div className="ListPreview__Todo">
          <span className="ListPreview__TodoNew">＋</span>
          <input className="ListPreview__TodoInput" type="text" placeholder="Add new" onKeyDown={handleKeyDownOnNewTodo} />
        </div>
        {uncompleted.map(Todo)}
        {completed.map(Todo)}
      </div>
    </div>
  )
};

ListPreview.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onClickTodo: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeTodo: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default ListPreview;
