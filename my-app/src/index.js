import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-notifications/lib/notifications.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoApp />, document.getElementById('myapp'));
registerServiceWorker();
