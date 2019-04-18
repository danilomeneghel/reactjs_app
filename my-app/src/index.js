import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

import 'react-notifications/lib/notifications.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoApp />, document.getElementById('myapp'));
registerServiceWorker();
