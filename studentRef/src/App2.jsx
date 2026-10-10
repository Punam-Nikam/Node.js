import React,{ useState, useEffect } from 'react'

function App2() {
  const [name,setName] = useState("");

  useEffect(function() {
    console.log("Name has changed to : ",name);
  }, [name]);
 
 return(
  <div>
    <h1>UseEffect Hook Example</h1>
    <input 
      type="text" 
      placeholder="Enter your name"
      value={name}
      onChange={function(event) {
        setName(event.target.value);
      }}
    />
    <h2>Hello, {name}!</h2>
  </div>
 )
}
export default App2