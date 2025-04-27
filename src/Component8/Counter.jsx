import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, setInitialState } from './CounterAction';

const Counter = ({ initialCount }) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setInitialState(initialCount));
  }, [dispatch, initialCount]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
};

export default Counter;