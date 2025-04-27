import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './TodoType';


export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task, 
  };
};


export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,  
  };
};


export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,  
  };
};