import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // Handling Functions

  function addStepHandler() {
    setStep((s) => s + 1);
  }
  function removeStepHandler() {
    setStep((s) => s - 1);
  }
  function addCountHandler() {
    setCount((c) => c + step);
  }
  function removeCountHandler() {
    setCount((c) => c - step);
  }
  function resetHandler() {
    setCount((c) => (c = 0));
    setStep((s) => (s = 1));
  }

  return (
    <div className="date-counter">
      <h1>Date Counter</h1>
      <button onClick={removeStepHandler}>-</button> Step: {step}
      <button onClick={addStepHandler}>+</button>
      <br />
      <button onClick={removeCountHandler}>-</button> Count: {count}
      <button onClick={addCountHandler}>+</button>
      <br />
      <button onClick={resetHandler}>Reset</button>
      <p>
        {/* {count === 0 ? "Today is " : null}
        {count < 0 ? Math.abs(count) + " days ago is " : null}
        {count > 0 ? count + " days from today is " : null} */}
        {count === 0
          ? "Today is "
          : count < 0
          ? Math.abs(count) + " days ago is "
          : count + " days from today is "}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
