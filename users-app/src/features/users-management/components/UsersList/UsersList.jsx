import './UsersList.css';
import UserCard from "../UserCard/UserCard.jsx";

function UsersList({users}) {

    return <div className="UsersList">
        {(users ?? []).map((user, index) =>
            <UserCard key={index} user={user}></UserCard>
        )}
    </div>;
}

export default UsersList;