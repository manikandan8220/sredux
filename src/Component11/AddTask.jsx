import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './TodoAction';


const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText) {
      dispatch(addTask(taskText));
      setTaskText(''); 
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        style={{ padding: '10px', width: '300px' }}/>
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px',
          marginLeft: '10px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
        }}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;