import React, { useState } from 'react';

function App() {
  const [colour,setColor]=useState("");
  

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Color Changer</h1>
      <select value={colour} onChange={e=> setColor(e.target.value)} style={{backgroundColor:colour,width:"300px",height:"30px"}}>
         <option value="red">Red</option>
         <option value="yellow" >Yellow</option>
        <option value="green">green</option>
      </select>
      <div style={{height:"200px",width:"590px",backgroundColor:colour,marginLeft:"450px",marginTop:"80px",border:"2px solid black",borderRadius:"7px"}}>

      </div>
    </div>
   
  );

 
}

export default App;