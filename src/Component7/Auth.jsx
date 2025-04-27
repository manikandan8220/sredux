import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './AuthAction';

const Auth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isAuthenticated ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Log In</h2>
          <button
            onClick={() =>
              dispatch(login({ name: 'John Doe', email: 'john@example.com' }))
            }> Login</button>
        </>
      )}
    </div>
  );
};

export default Auth;