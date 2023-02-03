import { useEffect, useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()).then((data) => {
        setUsers(data)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="px-2 py-10 md:px-24">
      <h1 className='text-center font-bold text-4xl mb-4'>Users</h1>
      {users.length ? 
      (<div>
        {users.map((user)=>(
        <UserCard key={user.id} user={user}/>
        ))}
        </div>) 
      : (<span>loading....</span>)}
    </div>
  );
}

export default App;
