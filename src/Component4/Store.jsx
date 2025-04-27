import { createStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './CounterReducer';

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;