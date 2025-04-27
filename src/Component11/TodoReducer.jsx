import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './TodoType';

const initialState = {
  tasks: [],
};


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { 
        ...state, 
        tasks: [...state.tasks, { 
          id: Date.now(), 
          text: action.payload, 
          completed: false 
        }] 
      };
    case DELETE_TASK:
      return { 
        ...state, 
        tasks: state.tasks.filter(task => task.id !== action.payload) 
      };
    case TOGGLE_TASK:
      return { 
        ...state, 
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ) 
      };
    default:
      return state;
  }
};

export default todoReducer;