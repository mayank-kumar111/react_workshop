import { useState } from "react"
import CounterText from "./CounterText"

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  }
  return (
    <>
      <CounterText counter={counter} />
      <CounterText counter={counter} />
      <CounterText counter={counter} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App