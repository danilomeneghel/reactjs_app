import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/react-notifications/lib/notifications.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoApp />, document.getElementById('myapp'));
registerServiceWorker();
