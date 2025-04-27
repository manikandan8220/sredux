import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from './MessageAction';


const UpdateMessage = () => {
  const [newMessage, setNewMessage] = useState('');
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (newMessage) {
      dispatch(setMessage(newMessage));
      setNewMessage('');  
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={newMessage}
        onChange={handleChange}
        placeholder="Enter new message"
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleSubmit} style={{ padding: '8px' }}>
        Update Message
      </button>
    </div>
  );
};

export default UpdateMessage;