import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // useSelector to get counter value from store
  const count = useSelector((state) => state.counter.count);
  
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;