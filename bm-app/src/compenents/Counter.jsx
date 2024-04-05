import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const resetCounter = () => {
        setCount(0)
    }
    const increment = () => {
      // updater function for multiple callbacks
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <>
    <h2>{count}</h2>
    <button onClick={decrement}>Decrement</button>
    <button onClick={resetCounter}>Reset</button>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default Counter