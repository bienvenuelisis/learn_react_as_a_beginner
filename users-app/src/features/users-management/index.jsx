import UsersList from "./components/UsersList/UsersList.jsx";
import {useEffect, useState} from "react";
import {getUsers} from "./services/usersService.js";

function UsersManagement() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        });

    }, []);

    return <UsersList users={users}></UsersList>;
}

export default UsersManagement;