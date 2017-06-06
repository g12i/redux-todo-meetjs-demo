import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Icon, { minus } from '../Icon';

const ListEditorTodo = ({
  completed,
  content,
  id,
  onChangeTodoContent,
  onChangeTodoCompletionStatus,
  onClickRemoveTodo
   }) => (
    <div className={`ListEditor__Todo ListEditor__Todo--${(completed ? 'Completed' : 'UnCompleted')}`} key={id}>
      <Checkbox checked={completed} onChange={() => onChangeTodoCompletionStatus(id)} />
      <input className="ListEditor__TodoInput" type="text" value={content} onChange={e => onChangeTodoContent(id, e.target.value)} />
      <Button onClick={() => onClickRemoveTodo(id)}><Icon icon={minus} alt="-" /></Button>
    </div>
  );

ListEditorTodo.propTypes = {
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChangeTodoContent: PropTypes.func.isRequired,
  onChangeTodoCompletionStatus: PropTypes.func.isRequired,
  onClickRemoveTodo: PropTypes.func.isRequired,
};

export default ListEditorTodo;