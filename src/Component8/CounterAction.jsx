import { INCREMENT, DECREMENT, SET_INITIAL_STATE } from './CounterType';


export const incrementCounter = () => {
  return { type: INCREMENT };
};

export const decrementCounter = () => {
  return { type: DECREMENT };
};

export const setInitialState = (initialCount) => {
  return { type: SET_INITIAL_STATE, payload: initialCount };
};