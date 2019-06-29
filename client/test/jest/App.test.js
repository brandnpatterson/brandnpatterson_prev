import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../../src/store';
import App from '../../src/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleLeft,
  faAngleRight,
  faDatabase,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import 'core-js/modules/es6.promise';

library.add(fab, faAngleLeft, faAngleRight, faDatabase, faEnvelope, faPhone);

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
