import * as ReactBootStrap from 'react-bootstrap';
import React, { Component } from 'react'; 


class SortButton extends Component {
    
    render() {
       
        return <div className="buttons">
            <button className="sortButton" onClick={ () => this.props.sortBy('this.props.name') } ><img src="https://icon-icons.com/icons2/10/PNG/32/uparrow_arriba_1538.png" alt="icon"/></button> 
            <button className="sortButton" onClick={ () => this.props.orderBy('this.props.name') } ><img src="https://icon-icons.com/icons2/10/PNG/32/arrowdown_flech_1539.png" alt="icon"/></button>
            </div>
        
    }    
} 
export default SortButton;