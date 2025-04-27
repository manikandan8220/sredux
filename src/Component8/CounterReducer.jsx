import { INCREMENT, DECREMENT, SET_INITIAL_STATE } from './CounterType';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case SET_INITIAL_STATE:
      return { ...state, count: action.payload }; 
    default:
      return state;
  }
};

export default counterReducer;