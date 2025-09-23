import { useEffect, useState } from "react"


const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
  }, []);

  const increment = () => {
    //setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <h1>This is Counter Number: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  )
}

export default App