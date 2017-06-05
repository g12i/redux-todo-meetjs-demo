import React from 'react';
import PropTypes from 'prop-types';

const ListEditorTodo = ({ completed, content, id, onChangeTodoContent, onChangeTodoCompletionStatus }) => (
  <div className={`ListEditor__Todo ListEditor__Todo--${(completed ? 'Completed' : 'UnCompleted')}`} key={id}>
    <input className="ListEditor__TodoCheckbox" type="checkbox" checked={completed} onChange={() => onChangeTodoCompletionStatus(id)} />
    <input className="ListEditor__TodoInput" type="text" value={content} onChange={e => onChangeTodoContent(id, e.target.value)} />
  </div>
);

ListEditorTodo.propTypes = {
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeTodoContent: PropTypes.func.isRequired,
  onChangeTodoCompletionStatus: PropTypes.func.isRequired,
};

export default ListEditorTodo;