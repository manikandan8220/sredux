import { SET_MESSAGE } from './MessageType';


export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,  
  };
};