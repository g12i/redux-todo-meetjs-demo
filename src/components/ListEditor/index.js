import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

import ListEditorTodo from '../ListEditorTodo';

const ListEditor = ({
  title,
  id,
  todos,
  onChangeListTitle,
  onRemoveList,
  onAddTodo,
   }) => {
  const uncompleted = todos.filter(({ completed }) => !completed);
  const completed = todos.filter(({ completed }) => completed);
  const handleKeyDownOnNewTodo = e => {
    if (e.key === 'Enter') {
      onAddTodo(e.target.value);
    }
  };

  const NewTodoInput = (
    <div className="ListEditor__Todo ListEditor__Todo--New">
      <input className="ListEditor__TodoInput" type="text" placeholder="Add new" onKeyDown={handleKeyDownOnNewTodo} />
    </div>
  );

  return (
    <div className="ListEditor">
      <input type="text" className="ListEditor__TitleInput" onChange={e => onChangeListTitle(e.target.value)} value={title} />
      <div>
        {NewTodoInput}
        {uncompleted.map(todo => <ListEditorTodo key={todo.id} {...todo} />)}
        {completed.map(todo => <ListEditorTodo key={todo.id} {...todo} />)}
      </div>
      <div className="ListEditor__Actions">
        <Button dark onClick={() => onRemoveList(id)}>Remove</Button>
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
  onChangeListTitle: PropTypes.func.isRequired,
  onRemoveList: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default ListEditor;
