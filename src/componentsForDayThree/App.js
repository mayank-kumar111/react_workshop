// MUI Example
{/*
import MuiStyle from './componentsForDayThree/MuiStyle'
 const App = () => {
   return (
    <MuiStyle />
   )
 }

 export default App
*/}

//Mount & Unmount Example 
{/*
import React, {useState} from 'react'
import One from './Components/One'
import Two from './Components/Two'
import Three from './Components/Three'

const App = () => {
  const [showComponent, setShowComponent] = useState("one");

  return (
    <div>
      <h1>Mount & Unmount Example</h1>

      <button onClick={() => setShowComponent("one")}>Show One</button>
      <button onClick={() => setShowComponent("two")}>Show Two</button>
      <button onClick={() => setShowComponent("three")}>Show Three</button>

      {showComponent === "one" && <One />}
      {showComponent === "two" && <Two />}
      {showComponent === "three" && <Three />}
    </div>
  );
}

export default App;
*/}


//Infinite Rendering Example
{/*

import React, { useState, useEffect } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    });

    return (
        <div>
            <h1>Infinite Rendering Example</h1>
            <h2>Counter: {count}</h2>
        </div>
    );
};

export default App;/

/*}



// React Lifecycle with Counter
{/*

import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);


  useEffect(() => {
    if (count > 0) {
      console.log("Component Updated - Count changed:", count);
    }
  }, [count]);

  return (
    <div>
      <h1>React Lifecycle with Counter</h1>

      {show && <h2>Counter Value: {count}</h2>}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Counter" : "Mount Counter"}
      </button>
    </div>
  );
};

export default App;

*/}