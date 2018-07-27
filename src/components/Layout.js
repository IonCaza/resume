import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import App from './App';

const Layout = () => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={App} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
);

export default Layout;
