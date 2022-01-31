import React, { useState, useEffect } from 'react';
import {Table, Alert} from 'react-bootstrap';

function Users() {
  const [data, setdata] = useState([]);
  const [mode, setMode] = useState("online")
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setdata(data);
      localStorage.setItem("users", JSON.stringify(data))
    }).catch((e) => {
      let result = JSON.parse(localStorage.getItem("users"));
      setdata(result);
      setMode('offline');
    })
  }, []);
  
  return (
  <div>
    <h1>Users List</h1>
    <div>
      {
        mode=== 'offline' ?  <Alert variant='warning'>
        You are in offline mode!!!
      </Alert>
        : ''
      }
    </div>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((list) => (
        <tr key={list.id}>
          <td>{list.id}</td>
          <td>{list.name}</td>
          <td>{list.email}</td>
          <td>{list.address.street}</td>
        </tr>

      ))
    }
    
    
  </tbody>
</Table>
  </div>
)
}

export default Users;
