import React from 'react';

// import Counter from './Component8/Counter';
// import Auth from './Component7/Auth';

// import DisplayMessage from './Component10/DisplayMessage';
// import UpdateMessage from './Component10/UpdateMessage';

// import AddTask from './Component11/AddTask';
// import TodoList from './Component11/TodoList';

// import ThemeToggle from './Component12/ThemeToggle';

import LoginForm from './Component13/LoginForm';
import Profile from './Component13/Profile';
  
function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const theme = useSelector((state) => state.theme);
  return (
    <>
    <div>
      {/* <Counter /> */}
      {/* <Auth /> */}
      {/* <Counter initialCount={5} /> */}

      {/* <DisplayMessage />
      <UpdateMessage /> */}


        {/* <AddTask />
        <TodoList /> */}
    </div>

    {/* <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <ThemeToggle />
    </div> */}

    <div>
      {isAuthenticated ? <Profile /> : <LoginForm />}
    </div>
    </>
  );
}
export default App;