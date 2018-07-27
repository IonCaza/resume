import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import Layout from './components/Layout';

import Header from './components/Header';


import './styles/index.css';
import './assets/favicon.ico';
import { Switch } from '../node_modules/@material-ui/core';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
  ), document.getElementById('root'))
// registerServiceWorker();
