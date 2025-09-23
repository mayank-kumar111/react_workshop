import React from 'react'
import { useState } from 'react'

const Minus = () => {
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [result, setResult] = useState(null)

    const handleSubtract = () => {
        setResult(num1 - num2)
    }
    return (<div>
            <h1>Minus</h1>
            <input onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" placeholder='Enter second number' onChange={(e) => setNum2(Number(e.target.value))} />

            <button onClick={handleSubtract}>Subtract</button>
            <h2>Result: {result}</h2>
            {result < 0 && <h2>Result: Less than 0</h2>}
        </div>
    )
}

export default Minus