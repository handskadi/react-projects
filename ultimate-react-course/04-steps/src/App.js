import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💵",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousHandler() {
    if (step > 1) setStep((s) => s - 1);
  }
  function nextHandler() {
    if (step < 3) setStep((s) => s + 1);
  }
  function closeHandler() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      <button className="close" onClick={closeHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#ffffff" }}
              onClick={previousHandler}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#ffffff" }}
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
