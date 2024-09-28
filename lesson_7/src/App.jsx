import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Users from './components/Users/Users.jsx';
import User from './components/User/User.jsx';
import { useEffect } from 'react';
import { fetchUsers } from './redux/userReducer';


function App() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          {users.map((user) =>{
            return <Route path={"/user" + user.id} element={<User idUser={user.id - 1}/>}/>
          })}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;