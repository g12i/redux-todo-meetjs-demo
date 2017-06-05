import { combineReducers } from 'redux';

import lists from './lists';
import todos from './todos';
import ui from './ui';

export default combineReducers({
  lists,
  todos,
  ui,
});
