import { createStore } from '@reduxjs/toolkit';
import todoReducer from './TodoReducer';


const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;