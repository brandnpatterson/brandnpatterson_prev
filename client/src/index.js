import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleLeft,
  faAngleRight,
  faDatabase,
  faEnvelope,
  faPhone,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import 'core-js/modules/es6.promise';

library.add(
  fab,
  faAngleLeft,
  faAngleRight,
  faDatabase,
  faEnvelope,
  faPhone,
  faServer
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
