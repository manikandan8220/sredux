import { LOGIN, LOGOUT } from './AuthType';

export const Login = (userData) => ({
  type: LOGIN,
  payload: userData,
});

export const Logout = () => ({
  type: LOGOUT,
});