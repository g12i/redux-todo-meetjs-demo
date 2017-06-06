import uuid from 'uuid';

const ADD_LIST = 'lists/ADD';
const REMOVE_LIST = 'lists/REMOVE';
const CHANGE_LIST_TITLE = 'lists/CHANGE_TITLE';

export const addList = (title = '') => ({
  type: ADD_LIST,
  payload: {
    id: uuid(),
    date: Number(new Date()),
    title,
  }
});

export const removeList = id => ({
  type: REMOVE_LIST,
  payload: id
});

export const changeListTitle = ({ id, title }) => ({
  type: CHANGE_LIST_TITLE,
  payload: { id, title }
})

export default function (state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    case REMOVE_LIST:
      return state
        .filter(({ id }) => id !== action.payload);
    case CHANGE_LIST_TITLE:
      return state
        .map(list => list.id === action.payload.id ? { ...list, title: action.payload.title } : list)
    default:
      return state;
  }
}
