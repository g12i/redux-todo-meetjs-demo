import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import ListEditorTodo from '../ListEditorTodo';

const ListEditor = ({
  title,
  id,
  todos,
  onChangeListTitle,
  onChangeTodoCompletionStatus,
  onChangeTodoContent,
  onAddTodo,
   }) => {
  const uncompleted = todos.filter(({ completed }) => !completed);
  const completed = todos.filter(({ completed }) => completed);
  const handleKeyDownOnNewTodo = e => {
    if (e.key !== 'Enter') {
      return;
    }
    onAddTodo(e.target.value);
  };

  return (
    <div className="ListEditor">
      <input type="text" className="ListEditor__TitleInput" onChange={e => onChangeListTitle(e.target.value)} value={title} />
      <div>
        <div className="ListEditor__Todo">
          <span className="ListEditor__TodoNew">＋</span>
          <input className="ListEditor__TodoInput ListEditor__TodoInput--New" type="text" placeholder="Add new" onKeyDown={handleKeyDownOnNewTodo} />
        </div>
        {uncompleted
          .map(todo => ({ ...todo, onChangeTodoCompletionStatus, onChangeTodoContent }))
          .map(todo => <ListEditorTodo key={todo.id} {...todo} />)}
        {completed
          .map(todo => ({ ...todo, onChangeTodoCompletionStatus, onChangeTodoContent }))
          .map(todo => <ListEditorTodo key={todo.id} {...todo} />)}
      </div>
    </div>
  )
};

ListEditor.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onChangeTodoCompletionStatus: PropTypes.func.isRequired,
  onChangeListTitle: PropTypes.func.isRequired,
  onChangeTodoContent: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default ListEditor;
