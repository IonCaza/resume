import React from 'react';
import ReactDOM from 'react-dom';
import LeftNav from '../src/components/LeftNav';

const toggleMock = jest.fn();

it('renders Left Navigation without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeftNav toggleDrawer={toggleMock} drawerIsOpen={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
