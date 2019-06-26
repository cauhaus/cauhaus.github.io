import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
 * for running tests with Jest as per:
 * https://facebook.github.io/create-react-app/docs/running-tests
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
