// App.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const App = () => {
    const { user, login, logout } = useContext(AuthContext);

    return (
        <div>
            <h1>Authentication Example</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => login({ name: 'Amah Kwatcha' })}>Login</button>
                </div>
            )}
        </div>
    );
};

export default App;