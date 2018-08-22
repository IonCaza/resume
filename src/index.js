import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Content from './components/Content';
import Contact from './components/Contact';
import Print from './components/Print';

import './assets/favicon.ico';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/contact" component={Contact} />
      <Route path="/print" component={Print} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
