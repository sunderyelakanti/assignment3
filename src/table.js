import React from 'react';
import './username'

function Table(props) {
  
return(
    
            
         <tr>
            <td>{props.Sno}</td>
            <td>{props.Username}</td>
            <td>{props.Email}</td>
            <td>{props.Phone}</td>
            <td>{props.FirstName}{props.LarstName}</td>
          
            

            </tr>
        
    // </div>
)}

export default Table