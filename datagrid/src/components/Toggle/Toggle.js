import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default ({ checked, handleChange }) => { 

return (
 <Toggle
  id='cheese-status'
  defaultChecked={checked}
  onChange={handleChange} />
)


}