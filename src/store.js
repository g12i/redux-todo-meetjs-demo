import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

const enhancer = compose(
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
);

const initialState = {
  lists: [],
  todos: [],
};

export default createStore(
  v => v,
  initialState,
  enhancer,
);

