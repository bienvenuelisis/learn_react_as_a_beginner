// UserComponent.js
import React from 'react';

const UserComponent = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default UserComponent;