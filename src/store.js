import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

const devTools = process.env.NODE_ENV === 'development' ? compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
) : null;

const initialState = {
  lists: [],
  todos: [],
};

export default createStore(
  v => v,
  initialState,
  devTools,
);

