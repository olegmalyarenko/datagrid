import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import React, { Component } from 'react';
import Faker from 'faker';
import Table from './components/Table';
import SortButton from './components/SortButton';
//import  _  from 'lodash';
const _ = require('lodash');


  
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      term: '',
      checked: false,
      value: '', 
    }
    this.sortBy = this.sortBy.bind(this);
    this.orderBy = this.orderBy.bind(this);
    
    this.searchHandler = this.searchHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dropdownChange = this.dropdownChange.bind(this); 
    this.dropdownChoosen = this.dropdownChoosen.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    
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
  

  sortBy(key, e) {
       
      const array = [...this.state.users]; 
      const sortArr = _.sortBy(array, [key]);  
      this.setState ({ users: sortArr }); 
             
       Array.from(document.querySelectorAll('.sortButton')).forEach(element =>
        element.classList.remove('active-button') || null,
      );
      e.target.classList.add('active-button');
  }
  
  orderBy(key, e) {
       
    const array = [...this.state.users]; 
    const sortArr = _.orderBy(array, [key], ['desc']); 
     this.setState ({ users: sortArr })  
     
     Array.from(document.querySelectorAll('.sortButton')).forEach(element =>
      element.classList.remove('active-button') || null,
    );
    e.target.classList.add('active-button');
     
     
}
dataSearch(term) {
   
  return function x (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}  

dropdownChoosen(value) {
   
  return function x (x) {
    if (value.length > 2) {
    return x.role.includes(value) || !value;
  }
  return !value;
  }
}  

toggleFilter(checked) {
  
  return function x (x) {
    if (checked ===  true) {
     
    return x.boolean.includes('Yes');
    }
    return !checked;
  }
}  


dropdownChange(event) {
  this.setState({value: event.target.value});
  
}


  
handleChange() {
  this.setState ({ checked: !this.state.checked  })
  
}   



 searchHandler (e) {
  this.setState({
    term: e.target.value
  });
 }
 
  render() {
    return <Table   users={this.state.users}
    term = {this.state.term}
    value = {this.state.value}
    checked = {this.state.checked}

    sortBy={this.sortBy}
    orderBy = {this.orderBy}
    dataSearch= {this.dataSearch}
    searchHandler = {this.searchHandler}
    handleChange = {this.handleChange}
    dropdownChange = {this.dropdownChange}
    toggleFilter = {this.toggleFilter}
    dropdownChoosen = {this.dropdownChoosen}
    

    />

  }
  
}
 
export default App;