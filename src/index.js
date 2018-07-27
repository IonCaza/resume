import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import './styles/index.css';
import './assets/favicon.ico';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
