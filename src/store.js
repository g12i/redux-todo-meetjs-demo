import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const devTools = process.env.NODE_ENV === 'development' ? compose(
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
) : null;

const initialState = {
  lists: [],
  todos: [],
};

export default createStore(
  rootReducer,
  initialState,
  devTools,
);

