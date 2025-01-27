// App.js
import React from 'react';
import UserComponent from './UserComponent';
import withDataFetching from './withDataFetching';

const UserComponentWithData = withDataFetching('https://jsonplaceholder.typicode.com/users/1')(UserComponent);

const App = () => {
    return (
        <div>
            <UserComponentWithData />
        </div>
    );
};

export default App;