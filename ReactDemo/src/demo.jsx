function App() {
  let count = 0;

  function increase() {
      count = count+1;
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
    );
}
export default App;