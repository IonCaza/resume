import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Content from './components/Content';
import Print from './components/Print';

import './assets/favicon.ico';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/print" component={Print} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
