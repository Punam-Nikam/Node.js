import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0);
    // const count=0;

    function increaseCount() {
    setCount(count +1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
 return(
  <div>
    <h1>Counter Program</h1>
    <h2>Count : {count}</h2>
    <button onClick={increaseCount}>
      Increase
    </button>
    <button onClick={decreaseCount}>
      Decrease
    </button>
  </div>
 )
}
export default App
