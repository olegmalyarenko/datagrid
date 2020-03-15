import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default ({ cheeseIsReady, handleChange }) => { 

return (
 <Toggle
  id='cheese-status'
  defaultChecked={cheeseIsReady}
  onChange={handleChange} />
)


}