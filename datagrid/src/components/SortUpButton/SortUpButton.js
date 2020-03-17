import * as ReactBootStrap from 'react-bootstrap';
import React, { Component } from 'react'; 


class SortUpButton extends Component {
    
    render() {
       
        return (
            <button className="sortButton" onClick= {this.props.action} ><img className="sortButton" src="https://icon-icons.com/icons2/10/PNG/32/uparrow_arriba_1538.png" alt="icon"/></button> 
        )
           
            
    }    
} 
export default SortUpButton;