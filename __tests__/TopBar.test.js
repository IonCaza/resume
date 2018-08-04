import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from '../src/components/TopBar';

const toggleMock = jest.fn();

it('renders Top Bar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopBar toggleDrawer={toggleMock} drawerIsOpen={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
