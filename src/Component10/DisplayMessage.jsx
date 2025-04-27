import React from 'react';
import { useSelector } from 'react-redux';


const DisplayMessage = () => {
  const message = useSelector((state) => state.message);  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h3>Global Message: {message}</h3>
    </div>
  );
};

export default DisplayMessage;