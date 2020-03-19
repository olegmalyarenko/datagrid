import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import './Toggle.css'

export default ({ checked, handleChange }) => { 

return (
 <Toggle
  id='cheese-status'
  className= "toggle"
  defaultChecked={checked}
  onChange={handleChange} />
)


}