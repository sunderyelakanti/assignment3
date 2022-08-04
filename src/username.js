import React from 'react';
import UserData from './users.json';
import Table from './table';

function Username () {
  return (
    <div>{UserData.map((UserName ,index)=>(
      <div key={index}><li>{UserName.username}</li></div>
   ))}
   
    
    <table><tr><th>Sno</th><th>UserName</th><th>Email</th><th>Phone</th>
    <th>Name</th></tr>
    {UserData.map((Data, index) =>(<Table Sno={Data.id} Username={Data.username} 
    Email={Data.email} Phone={Data.phone} FirstName={Data.name.firstname}
    LastName={Data.name.lastname} />))}</table></div>)
}

export default Username