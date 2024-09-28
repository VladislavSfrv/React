import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/userReducer';
import {Link} from "react-router-dom"

function Users() {
    const { users, loading, error } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            <div className='main-title'>
                <h1>Пользователи</h1>
            </div>
            <div className='users'>
                {loading && <div id="load">
                    <div>G</div>
                    <div>N</div>
                    <div>I</div>
                    <div>D</div>
                    <div>A</div>
                    <div>O</div>
                    <div>L</div>
                </div>}
                {error && <p>Ошибка {error}</p>}
                {users.length ? <ul>{
                    users.map(user => (
                        <li key={user.id}><Link to={"/user" + user.id}>{user.name}</Link></li>
                    ))
                }
                </ul> : null}
            </div>
        </div>
    );
}

export default Users;