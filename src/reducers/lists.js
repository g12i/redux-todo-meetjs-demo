import uuid from 'uuid';

const ADD_LIST = 'lists/ADD';
const REMOVE_LIST = 'lists/REMOVE';

export const addList = title => ({
  type: ADD_LIST,
  payload: {
    title,
    id: uuid(),
    date: Number(new Date()),
  }
});

export const removeList = id => ({
  type: REMOVE_LIST,
  payload: id
});

export default function (state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    case REMOVE_LIST:
      return state
        .filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}
