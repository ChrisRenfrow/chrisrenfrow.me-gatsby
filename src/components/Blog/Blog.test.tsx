import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Blog from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blog />, div);
});