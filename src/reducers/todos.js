import uuid from 'uuid';

const ADD_TODO = 'todos/ADD';
const REMOVE_TODO = 'todos/REMOVE';
const TOGGLE_TODO_COMPLETION = 'todos/TOGGLE_TODO_COMPLETION';

export const addTodo = (listId, content) => ({
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

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state
        .filter(({ id }) => id !== action.payload);
    case TOGGLE_TODO_COMPLETION:
      return state
        .map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
    default:
      return state;
  }
}
