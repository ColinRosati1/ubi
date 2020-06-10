import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Universal Basic Income Catalogue</title>
      <link rel="canonical" href="https://colinrosati1.github.io/ubi/" />
      <meta
        name="description"
        content="An easy to ready catalogue of Universal Basic Income from past to present."
      />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
