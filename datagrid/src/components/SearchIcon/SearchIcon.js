import React from 'react'; 
import './SearchIcon.css'


export default ({  }) => {  
   const showInput = () => {
        const input = document.getElementById('nameInput');
        if (input.style.display = 'block')  {
            input.style.display = 'none'  
          }
          
        if (input.style.display = 'none') {
            input.style.display = 'block';
        } 
        
        
    }

    return (
        <img 
        src="https://icon-icons.com/icons2/39/PNG/32/xmag_search_find_export_locate_5984.png" 
        alt="icon" 
        width="20"
        height="25"
        onClick={ showInput }/>
    )

}