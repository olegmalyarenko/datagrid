import React from 'react';
import "./Search.css";

export default ({ searchHandler }) => {
  
  
  
  return (
   //<div className= "search">
    <div className="searchbar form-group">
      <input
        type="text"
        id = 'nameInput'
        className="form-control"
        placeholder="Search people by name..."
        onChange={searchHandler}
      />
    </div>
    //</div> 
  );
};