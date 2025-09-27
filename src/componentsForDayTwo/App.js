{/*

    import {useState} from 'react'
import CounterText from './CounterText'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'

const App = () => {
  //const [counter, setCounter] = useState(0)
  const [currentShow, setCurrentShow] = useState(0)

  const showOne = () => {
    setCurrentShow(1)
    }
  const showTwo = () => {
  setCurrentShow(2)
  }
  const showThree = () => {
  setCurrentShow(3)
  }
  
  return (
    <>
    */}

//Counter Example
{/*
import React, { useState } from 'react'
import Plus from './componentsForDayTwo/Plus'
import Minus from './componentsForDayTwo/Minus'
<CounterText counter={counter}/>
<CounterText counter={counter}/>
<CounterText counter={counter}/>
<button onClick={plusClick}>INCREMENT</button>
<button onClick={minusClick}>DECREMENT</button>
*/}

{/* 
<button onClick={showOne}>SHOW ONE</button>
<button onClick={showTwo}>SHOW TWO</button>
<button onClick={showThree}>SHOW THREE</button>

{currentShow === 1 && <One /> }
{currentShow === 2 && <Two /> }
{currentShow === 3 && <Three />}
*/}

{/*
{currentShow === 1 ? <One />: <Two /> }
{currentShow === 2 ? <Two />: null }
{currentShow === 3 ? <Three />: null }
*/}

{/*
<One />
<Two />
<Three />
*/}

//Counter with Conditional Rendering Example
{/*
import React, { useState } from "react";
import Plus from "./componentsForDayTwo/Plus_Counter";
import Minus from "./componentsForDayTwo/Minus_Counter";

function App() {
const [count, setCount] = useState(0);

return (
  <div >
    <h1>Counter Value is {count}</h1>

    <Plus count={count} setCount={setCount} />
    <Minus count={count} setCount={setCount} />

    
    {count > 20 ? (
      <h2 >Counter Value Above 20</h2>
    ) : (
      <h2 >Counter Value 20 or Below</h2>
    )}
  </div>
);
}

export default App;
*/}