import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💵",
];
function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
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
          <StepMessage step={step}> {messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              onClick={previousHandler}
              bgColor={"#7950f2"}
              textColor={"#ffffff"}
            >
              Previouss
            </Button>
            <Button
              onClick={nextHandler}
              bgColor={"#7950f2"}
              textColor={"#ffffff"}
            >
              NexT
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button onClick={onClick} style={{ background: bgColor, color: textColor }}>
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

export default App;
