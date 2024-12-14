import React, { useState } from 'react';

function Hooks() {
  const[name,setName]=useState("DHARMENDER")
  return (
    <div>
      <button type="button" onClick={()=> {setName("DEVLOPER");
      }}
      >{name}</button>
    </div>
  );
}

export default Hooks;