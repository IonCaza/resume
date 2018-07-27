import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';

import './styles/index.css';
import './assets/favicon.ico';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
  ), document.getElementById('root'))
registerServiceWorker();
