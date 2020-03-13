import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import React, { Component } from 'react';
import Faker from 'faker';
import Table from './components/Table';
//import  _  from 'lodash';
const _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
    this.sortBy = this.sortBy.bind(this);
    this.orderBy = this.orderBy.bind(this);
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
  

  sortBy(key) {
       
      const array = [...this.state.users]; //приравниваю новый массив к стейту
      const sortArr = _.sortBy(array, [key]);  //сортирую значения массива
       this.setState ({ users: sortArr })   //приравниваю отрортированную коллекцию к стейту
       console.log(this.state.users);
  }
  
  orderBy(key) {
       
    const array = [...this.state.users]; 
    const sortArr = _.orderBy(array, [key], ['desc']); 
     this.setState ({ users: sortArr })   
     console.log(this.state.users);
}

  render() {
    return <Table   users={this.state.users}
    sortBy={this.sortBy}
    orderBy = {this.orderBy}
    />

  }
  
}
 
export default App;