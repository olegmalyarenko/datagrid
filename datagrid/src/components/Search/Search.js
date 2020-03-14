import React from 'react';

export default ({ searchHandler }) => {
  
  
  
  return (
    <div className="searchbar form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search people by name..."
        onChange={searchHandler}
      />
    </div>
  );
};