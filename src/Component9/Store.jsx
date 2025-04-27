import { createStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;