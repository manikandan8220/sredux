import { INCREMENT, DECREMENT } from './CounterType';


export const incrementCounter = () => {
  return { type: INCREMENT };
};

export const decrementCounter = () => {
  return { type: DECREMENT };
};