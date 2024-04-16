import React, { useState, useEffect } from "react";

function App() {

  const [advice, seAdvice] = useState('')
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    seAdvice(data.slip.advice)
    setCount(c => c + 1)
}

useEffect(()=> {
  getAdvice()
}, [])

  return (
    <div>
      <p>Today's advice: <strong>{advice}</strong></p>
      <button onClick={getAdvice}>Fetch Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p> You have read <strong>{props.count}</strong> pieces of advices</p>
  )
}

export default App;
