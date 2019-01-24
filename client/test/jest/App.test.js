import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../src/store';
import App from '../../src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
