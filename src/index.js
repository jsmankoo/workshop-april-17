import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Index from './containers/index/index';
import store from './store'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
