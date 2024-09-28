import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/userReducer';
import { Link } from 'react-router-dom';

function User({ idUser }) {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const currentUser = users[idUser];

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])



    return (
        <main>
            <Link to={`/`}><button>Back</button></Link>
            <div>
                <h1>{currentUser.name}</h1>
                <p>Email: {currentUser.email}</p>
                <h2>Address</h2>
                <p>City: {currentUser.address.city}</p>
                <p>Street: {currentUser.address.street}</p>
                <h2>Company</h2>
                <p>Phone: {currentUser.phone}</p>
                <p>Website: <a href={currentUser.website} target='_blank'>{currentUser.website}</a></p>

            </div>
        </main>
    );
}

export default User;