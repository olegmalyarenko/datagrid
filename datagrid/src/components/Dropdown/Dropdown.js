import React from 'react';

export default ({ value, dropdownChange }) => {  
    return (
        <select  value={ value } onChange={dropdownChange} class="btn btn-secondary dropdown-toggle"  >
         <option selected value=''>All</option>   
         <option value="Activist">Activist</option>
         <option value="Mentor">Mentor</option>
         <option  value="Student">Student</option>
  
        </select>
    )
}