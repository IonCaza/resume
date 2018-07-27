import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../src/components/Layout';

it('renders Layout without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
