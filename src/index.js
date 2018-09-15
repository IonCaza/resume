import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './components/PageContent';
import Contact from './components/PageContact';

import './assets/favicon.ico';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
