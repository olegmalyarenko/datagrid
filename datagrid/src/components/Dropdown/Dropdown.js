import React from 'react';

export default ({ value, dropdownChange }) => {  
    return (
        <select  value={ value } onChange={dropdownChange} class="btn btn-secondary dropdown-toggle"  >
         <option selected value="all">All</option>   
         <option value="activist">Activist</option>
         <option value="mentor">Mentor</option>
         <option  value="student">Student</option>
  
        </select>
    )
}