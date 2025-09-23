import React, { useState } from 'react'

const Plus = () => {
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [result, setResult] = useState(null)

    const handleAdd = () => {
        setResult(num1 + num2)
    }
    return (
        <div>
            <h1>Plus</h1>
            <input onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" placeholder='Enter second number' onChange={(e) => setNum2(Number(e.target.value))} /> 
            <button onClick={handleAdd}>Add</button>
            <h2>Result: {result}</h2>
            {result > 10 && <h2>Result: Greater than 10</h2>}
        </div>
    )
}

export default Plus