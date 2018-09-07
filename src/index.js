import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './components/Content';
import Contact from './components/Contact';

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
