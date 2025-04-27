import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './ThemeAction';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme); 
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme()); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: theme === 'light' ? '#4CAF50' : '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default ThemeToggle;