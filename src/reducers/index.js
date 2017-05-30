import { combineReducers } from 'redux';

import lists from './lists';
import todos from './todos';

export default combineReducers({
  lists,
  todos,
});
