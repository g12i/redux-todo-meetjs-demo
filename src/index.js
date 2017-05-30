import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './Application';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

ReactDOM.render((
  <Provider store={store}>
    <Application />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
