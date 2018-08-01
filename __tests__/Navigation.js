import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/Navigation';

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
