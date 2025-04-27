import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask } from './TodoAction';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks); 
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Todo List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ listStyleType: 'none', marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}/>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginLeft: '10px',
              }} >
              {task.text}
            </span>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              style={{
                marginLeft: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px',
                cursor: 'pointer',
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;