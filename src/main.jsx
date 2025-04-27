import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './Component13/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // document.getElementById('root')
);