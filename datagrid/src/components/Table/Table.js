import * as ReactBootStrap from 'react-bootstrap';
import React, { Component } from 'react';
import './Table.css';
import Faker from 'faker';
import Search from '../Search';
import { user } from  '../../App';
import Toggle from '../Toggle';
import SearchIcon from '../SearchIcon';
import SortUpButton from '../SortUpButton';
import SortDownButton from '../SortDownButton';
import Dropdown from '../Dropdown';
class Table extends Component {
    
       
      renderUsers(user) {
        return (
          <tr  >
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.date}</td>
            <td>{user.country} </td>
            <td>{user.phone}</td>
            <td>{user.boolean}</td>
            <td>{user.ip}</td>
          </tr>
        )
      }
     
      render() {
        
        return <ReactBootStrap.Table 
        striped bordered hover variant="dark" className = "table table-fixed">
          <thead className ='sticky'>
        <tr>
          <th >
          <div className="title" >
            <p>Name</p>
            <div className="buttons">
            <SortUpButton action={ (e) => this.props.sortBy('name', e) } />
            <SortDownButton action={ (e) => this.props.orderBy('name', e) } />
          </div>
          
          
          </div>
                  
          
            <Search searchHandler={this.props.searchHandler}/>
          
          </th>

          <th><Dropdown
          
          value={this.props.value}
          dropdownChange={this.props.dropdownChange}/></th>

          <th > 
          <div className="title" >
            <p>Registration</p>
          <div className="buttons">
          <SortUpButton action={ (e) => this.props.sortBy('date', e) } />
          <SortDownButton action={ (e) => this.props.orderBy('date', e) } />
          </div>
          </div>
            </th>


          <th>
          <div className="title" >
            <p>Country</p>
           <div className="buttons">
           <SortUpButton action={ (e) => this.props.sortBy('country', e) } /> 
           <SortDownButton action={ (e) => this.props.orderBy('country', e) } />
          </div>
          </div>
          </th>

          <th> 
           <div className="title" >
            <p>Phone </p>
          <div className="buttons">
          <SortUpButton action={ (e) => this.props.sortBy('phone', e) } /> 
          <SortDownButton action={ (e) => this.props.orderBy('phone', e) } />
          </div>
          </div> 

          </th>
          <th>Active
            <Toggle 
            handleChange= {this.props.handleChange}
            cheeseIsReady = {this.props.cheeseIsReady}
            />
          </th>
          <th>
            
            <div className="title" >
            <p>IP</p>
          <div className="buttons">
            <SortUpButton action={ (e) => this.props.sortBy('ip', e) } /> 
            <SortDownButton action={ (e) => this.props.orderBy('ip', e) } />
          </div>
          </div> 

          </th>
        </tr>
      </thead>
      <tbody >
          {this.props.users.filter(this.props.dropdownChoosen(this.props.value))        
             
             .filter(this.props.toggleFilter(this.props.checked)) 
            
            .filter(this.props.dataSearch(this.props.term)).map(user => this.renderUsers(user))}
      </tbody>   
          </ReactBootStrap.Table>
      }
}

export default Table;