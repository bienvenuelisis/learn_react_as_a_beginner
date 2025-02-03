import './UserCard.css';

function UserCard({user}) {
    return <div className="UserCard">
        <h3>{user.username}</h3>
        <label htmlFor="username">{user.profession}</label>
        <label htmlFor="username">{user.age}</label>
        <br />
        <button onClick={null} type="button" className="btn btn-primary">Editer</button>
        <br />
        <button onClick={null} type="button" className="btn btn-primary">Supprimer</button>
        <br />
    </div>;
}

export default UserCard;