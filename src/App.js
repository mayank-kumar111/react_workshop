import { useState } from "react"
import CounterText from "./CounterText"
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
const App = () => {

  //const [counter, setCounter] = useState(0);
  const [currentShow, setCurrentShow] = useState(0);

  const showOne = () => {
    setCurrentShow(1);
  }

  const showTwo = () => {
    setCurrentShow(2);
  }

  const showThree = () => {
    setCurrentShow(3);
  }
  return (
    <>
      {/*
      <CounterText counter={counter} />
      <CounterText counter={counter} />
      <CounterText counter={counter} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      */}
      
      <button onClick={showOne}>Show One</button>
      <button onClick={showTwo}>Show Two</button>
      <button onClick={showThree}>Show Three</button>
      {/*
      {currentShow === 1 && <One />}
      {currentShow === 2 && <Two />}
      {currentShow === 3 && <Three />}
      */}
      {currentShow === 1 ? <One /> : <Two />}
      {currentShow === 2 ? <Two /> : null}
      {currentShow === 3 ? <Three /> : null}
      <One />
      <Two />
      <Three />
    </>
  )
}

export default App