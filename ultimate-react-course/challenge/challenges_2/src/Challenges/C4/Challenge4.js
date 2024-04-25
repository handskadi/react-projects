import React, { useState } from "react";
import "./index.css";

const Challenge4 = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // Handling Functions

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
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      {step}
      <br />
      <button onClick={removeCountHandler}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={addCountHandler}>+</button>

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

      {count > 0 || step > 1 ? (
        <div>
          <button onClick={resetHandler}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default Challenge4;
