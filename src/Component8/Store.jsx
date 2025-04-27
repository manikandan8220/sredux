import { createStore } from '@reduxjs/toolkit';
import counterReducer from './CounterReducer';

const store = createStore(counterReducer);

export default store;