import React, { useState } from 'react';
import './app.css';

function App() {
  const [count,setCount]= useState(0)
  return <>
   <h1>hello react!</h1>
   <p>{count}</p>
   <button onClick={()=>{setCount(count+1)}}>点赞👍</button>
  </>

}
export default App;