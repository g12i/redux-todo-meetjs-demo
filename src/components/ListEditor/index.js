import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';


const ListEditor = ({
  title,
  id,
  todos,
  onChangeListTitle,
  onRemoveList,
  onSaveList,
  onChangeTodoCheckbox,
  onChangeTodoContent,
  onAddTodo,
  onRemoveTodo,
 }) => {
  const uncompleted = todos.filter(({ completed }) => !completed);
  const completed = todos.filter(({ completed }) => completed);

  const Todo = ({ completed, content, id }) => (
    <div className={`ListEditor__Todo ListEditor__Todo--${(completed ? 'Completed' : 'UnCompleted')}`} key={id}>
      <input className="ListEditor__TodoCheckbox" type="checkbox" checked={completed} onClick={() => onChangeTodoCheckbox(id)} />
      <input className="ListEditor__TodoInput" type="text" value={content} onChange={e => onChangeTodoContent(id, e.target.value)} />
      <button className="ListEditor__TodoDelete" onClick={() => onRemoveTodo(id)}>&times;</button>
    </div>
  );

  const handleKeyDownOnNewTodo = e => {
    if (e.key !== 'Enter') {
      return;
    }
    onAddTodo(e.target.value);
  };

  const AddTodo = (
    <div className="ListEditor__Todo">
      <span className="ListEditor__TodoNew">＋</span>
      <input className="ListEditor__TodoInput" type="text" placeholder="Add new" onKeyDown={handleKeyDownOnNewTodo} />
    </div>
  );

  return (
    <div className="ListEditor">
      <input type="text" className="ListEditor__TitleInput" onChange={e => onChangeListTitle(e.target.value)} value={title} />
      <div>
        {AddTodo}
        {uncompleted.map(Todo)}
        {completed.map(Todo)}
      </div>
      <div className="ListEditor__Actions">
        <Button onClick={onRemoveList}>Remove</Button>
        <Button theme="blue" onClick={onSaveList}>Save</Button>
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
  onSaveList: PropTypes.func.isRequired,
  onChangeTodoCheckbox: PropTypes.func.isRequired,
  onChangeTodoContent: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default ListEditor;
