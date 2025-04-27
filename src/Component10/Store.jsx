import { createStore } from '@reduxjs/toolkit';
import messageReducer from './MessageReducer';


const store = createStore(
  messageReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export default store;