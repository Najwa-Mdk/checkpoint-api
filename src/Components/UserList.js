import React , {useState , useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './UserList.css';


const UserList = () => {
    const [users , setUsers] = useState ([])
    useEffect (() => {
        axios 
        .get ("https://jsonplaceholder.typicode.com/users")
        .then ((res) => setUsers(res.data))
        .catch ((err) => console.log (err))
    } , []);
  return (
    <div className = 'list' style={{display : 'flex' , flexWrap : 'wrap' }}>
     {users.map ((el)=> (<UserCard user ={el} key ={el.id}/>))} 
    </div>
  )
}

export default UserList
