import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import React, { Component } from 'react';
import Faker from 'faker';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }

  componentWillMount() {
    for (let i = 0; i < 1000; i++) {
      const user = {
        name: Faker.internet.userName(),
        boolean: Faker.random.boolean() ? 'Yes': 'No',
        date: Faker.date.past(20).toUTCString(),
        country: Faker.address.country(),
        phone: Faker.phone.phoneNumber(),
        ip: Faker.internet.ip(),   
        city: Faker.address.city(),  
      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }

 

  renderUsers(user) {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.city}</td>
        <td>{user.date}</td>
        <td>{user.country}</td>
        <td>{user.phone}</td>
        <td>{user.boolean}</td>
        <td>{user.ip}</td>
      </tr>
    )
  }
 
  render() {
    return <ReactBootStrap.Table 
    striped bordered hover variant="dark">
      <thead>
    <tr>
      <th>Name</th>
      <th>City </th>
      <th>Registration</th>
      <th>Country</th>
      <th>Phone</th>
      <th>Active</th>
      <th>IP</th>
    </tr>
  </thead>
  <tbody>
      {this.state.users.map(user => this.renderUsers(user))}
  </tbody>   
      </ReactBootStrap.Table>
  }
  
}
 
export default App;