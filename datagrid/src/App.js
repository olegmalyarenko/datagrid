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
      term: '',
      cheeseIsReady: false,
    }
    this.sortBy = this.sortBy.bind(this);
    this.orderBy = this.orderBy.bind(this);
    
    this.searchHandler = this.searchHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        role: Faker.random.arrayElement(['Student', 'Mentor', 'Activist']),  
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
dataSearch(term) {
   
  return function x (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}  
  
handleChange() {
  this.setState ({ cheeseIsReady: !this.state.cheeseIsReady  })
  console.log(this.state.cheeseIsReady);
}   



 searchHandler (e) {
  this.setState({
    term: e.target.value
  });
 }
 
  render() {
    return <Table   users={this.state.users}
    value = {this.props.term}
    sortBy={this.sortBy}
    orderBy = {this.orderBy}
    term={this.state.term}
    dataSearch= {this.dataSearch}
    searchHandler = {this.searchHandler}
    handleChange = {this.handleChange}
    cheeseIsReady = {this.state.cheeseIsReady}
    //toggleFilter = {this.toggleFilter}

    />

  }
  
}
 
export default App;