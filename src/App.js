// import React, { useState } from 'react'
// import Two from './components/Two'
// import Three from './components/Three'
// import One from './components/One'
// import Weather from './components/Weather'

// const App = () => {
//   const [counter , setCounter] = useState(0);
//   const [showTwo , setShowTwo] = useState(true);
//   const [showThree , setShowThree] = useState(true);
//   const [showOne , setShowOne] = useState(true);
//   return (
//     <div>
//       {/* <h1>Counter : {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       <button onClick={() => setCounter(counter - 1)}>-</button> */}
//       <button onClick={() => setShowTwo("Two")}>Two</button>
//       <button onClick={() => setShowThree("Three")}>Three</button>
//       <button onClick={() => setShowOne("One")}>One</button>
//       {showTwo === "Two" && <Two />}
//       {showThree === "Three" && <Three />}
//       {showOne === "One" && <One />}
//       <Weather />

//     </div>
//   )
// }

// export default App

import React from 'react'
import MuiStyle from './componentsForMUI/MuiStyle'
 const App = () => {
   return (
    <MuiStyle />
   )
 }
 
 export default App