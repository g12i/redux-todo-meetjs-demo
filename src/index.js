import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
