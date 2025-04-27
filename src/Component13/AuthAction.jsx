import { LOGIN, LOGOUT } from './AuthType';

export const login = (userData) => ({
  type: LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT,
});