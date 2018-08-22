import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './components/Content';
import Contact from './components/Contact';
import Print from './components/Print';

import './assets/favicon.ico';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/contact" component={Contact} />
      <Route path="/print" component={Print} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
