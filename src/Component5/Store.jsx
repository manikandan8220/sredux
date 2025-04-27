import { createStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './CounterReducer';

// Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create Store
const store = createStore(rootReducer);

export default store;