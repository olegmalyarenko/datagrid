import * as ReactBootStrap from 'react-bootstrap';
import React, { Component } from 'react';
import './Table.css';
import Faker from 'faker';
import SortButton from '../SortButton';
import { user } from  '../../App';

class Table extends Component {
    
       
      renderUsers(user) {
        return (
          <tr  >
            <td>{user.name}</td>
            <td>{user.city}</td>
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
        striped bordered hover variant="dark">
          <thead>
        <tr>
          <th >
          <div className="title" >
            <p>Name</p>
          <div className="buttons">
            <button className="sortButton" onClick={ () => this.props.sortBy('name') } ><img src="https://icon-icons.com/icons2/10/PNG/32/uparrow_arriba_1538.png" alt="icon"/></button> 
            <button className="sortButton" onClick={ () => this.props.orderBy('name') } ><img src="https://icon-icons.com/icons2/10/PNG/32/arrowdown_flech_1539.png" alt="icon"/></button>
          </div>
          </div>
          </th>

          <th>City </th>

          <th > 
          <div className="title" >
            <p>Registration</p>
          <div className="buttons">
            <button className="sortButton" onClick={ () => this.props.sortBy('date') } ><img src="https://icon-icons.com/icons2/10/PNG/32/uparrow_arriba_1538.png" alt="icon"/></button> 
            <button className="sortButton" onClick={ () => this.props.orderBy('date') } ><img src="https://icon-icons.com/icons2/10/PNG/32/arrowdown_flech_1539.png" alt="icon"/></button>
          </div>
          </div>
            </th>


          <th>
          <div className="title" >
            <p>Country</p>
           <div className="buttons">
            <button className="sortButton" onClick={ () => this.props.sortBy('country') } ><img src="https://icon-icons.com/icons2/10/PNG/32/uparrow_arriba_1538.png" alt="icon"/></button> 
            <button className="sortButton" onClick={ () => this.props.orderBy('country') } ><img src="https://icon-icons.com/icons2/10/PNG/32/arrowdown_flech_1539.png" alt="icon"/></button>
          </div>
          </div>
          </th>

          <th> 
           <div className="title" >
            <p>Phone </p>
          <div className="buttons">
            <button className="sortButton" onClick={ () => this.props.sortBy('phone') } ><img src="https://icon-icons.com/icons2/10/PNG/32/uparrow_arriba_1538.png" alt="icon"/></button> 
            <button className="sortButton" onClick={ () => this.props.orderBy('phone') } ><img src="https://icon-icons.com/icons2/10/PNG/32/arrowdown_flech_1539.png" alt="icon"/></button>
          </div>
          </div> 

          </th>
          <th>Active</th>
          <th>
            
            <div className="title" >
            <p>IP</p>
          <div className="buttons">
            <button className="sortButton" onClick={ () => this.props.sortBy('ip') } ><img src="https://icon-icons.com/icons2/10/PNG/32/uparrow_arriba_1538.png" alt="icon"/></button> 
            <button className="sortButton" onClick={ () => this.props.orderBy('ip') } ><img src="https://icon-icons.com/icons2/10/PNG/32/arrowdown_flech_1539.png" alt="icon"/></button>
          </div>
          </div> 

          </th>
        </tr>
      </thead>
      <tbody>
          {this.props.users.map(user => this.renderUsers(user))}
      </tbody>   
          </ReactBootStrap.Table>
      }
}

export default Table;