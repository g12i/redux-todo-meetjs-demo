import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

import ListEditorTodo from '../ListEditorTodo';

class ListEditor extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
    })).isRequired,
    onChangeListTitle: PropTypes.func.isRequired,
    onRemoveList: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
  }

  render() {
    const {
  title,
  todos,
  onChangeListTitle,
  onRemoveList,
  onAddTodo,
    } = this.props;
    const sorted = [...todos].sort((a, b) => b.order - a.order);
    const uncompleted = sorted.filter(({ completed }) => !completed);
    const completed = sorted.filter(({ completed }) => completed);
  const handleKeyDownOnNewTodo = e => {
    if (e.key === 'Enter') {
        onAddTodo(e);
        this.$input.value = '';
    }
  };

  const NewTodoInput = (
    <div className="ListEditor__Todo ListEditor__Todo--New">
        <input className="ListEditor__TodoInput" type="text" placeholder="Add new" onKeyDown={handleKeyDownOnNewTodo} ref={this.createRef('$input')} />
    </div>
  );

  return (
    <div className="ListEditor">
        <input type="text" className="ListEditor__TitleInput" onChange={onChangeListTitle} value={title} />
      <div>
        {NewTodoInput}
        {uncompleted.map(todo => <ListEditorTodo key={todo.id} {...todo} />)}
        {completed.map(todo => <ListEditorTodo key={todo.id} {...todo} />)}
      </div>
      <div className="ListEditor__Actions">
          <Button dark onClick={onRemoveList}>Remove</Button>
    </div>
      </div >
  )
  }

  createRef = key => ref => this[key] = ref;

}

export default ListEditor;
