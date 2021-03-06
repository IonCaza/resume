import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageExperience from './components/PageExperience';
import PageContact from './components/PageContact';
import PageAbout from './components/PageAbout';
import Prrr from './components/WidgetPrint';

import './assets/favicon.ico';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={PageExperience} />
      <Route path="/about" component={PageAbout} />
      <Route path="/contact" component={PageContact} />
      <Route path="/print" component={Prrr} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
