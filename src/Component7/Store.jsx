import { createStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './CounterReducer';
import authReducer from './AuthReducer';


const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});


const store = createStore(rootReducer);

export default store;