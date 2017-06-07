import uuid from 'uuid';

const ADD_TODO = 'todos/ADD';
const REMOVE_TODO = 'todos/REMOVE';
const TOGGLE_TODO_COMPLETION = 'todos/TOGGLE_COMPLETION';
const CHANGE_TODO_CONTENT = 'todos/CHANGE_CONTENT';

export const addTodo = ({ listId, content }) => ({
  type: ADD_TODO,
  payload: {
    listId,
    content,
    id: uuid(),
    date: Number(new Date()),
    completed: false,
  }
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});

export const toggleTodoCompletion = id => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: id
});

export const changeTodoContent = ({ id, content }) => ({
  type: CHANGE_TODO_CONTENT,
  payload: { id, content }
});

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload, order: state.length }];
    case REMOVE_TODO:
      return state
        .filter(({ id }) => id !== action.payload);
    case TOGGLE_TODO_COMPLETION:
      return state
        .map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
    case CHANGE_TODO_CONTENT:
      return state
        .map(todo => todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo)
    default:
      return state;
  }
}
