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