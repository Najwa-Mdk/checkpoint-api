import React , {useState , useEffect } from 'react';
import {useParams , Link} from 'react-router-dom';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';

const Profile = () => {
    const [user, setUser] = useState ({});
    const {id} = useParams ();
    useEffect(() => {
    axios 
    .get (`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then ((res) => setUser (res.data[0]))
    .catch((err) => console.error(err));
    })
  return (
    <div>
        <h2>Profile</h2>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.phone} </Card.Text>
        <Link to = {`/users`}>
        <Button variant="primary">Go Back</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile