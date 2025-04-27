import { createStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './CounterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;