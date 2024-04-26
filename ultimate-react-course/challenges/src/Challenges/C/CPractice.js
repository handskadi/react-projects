import React, { useState } from "react";
import "./styles.scss";
const questions = [
  { id: 1, question: "Where Morocco is located?", answear: "Africa" },
  { id: 2, question: "Capial of Morocco?", answear: "Rabat" },
  { id: 3, question: "Blue Pearl of Morocco?", answear: "Chefchouen" },
  { id: 4, question: "Biggest City in Morocco", answear: "Casabanca" },
  { id: 5, question: "King of Morocco?", answear: "Mohamed VI" },
];

const CPractice = () => {
  const [selected, setSelected] = useState(null);
  function itemClickHandler(id) {
    setSelected(id !== selected ? id : null);
  }
  return (
    <div className="question-cards">
      {questions.map((question) => (
        <div
          className={question.id === selected ? "selected" : ""}
          onClick={() => itemClickHandler(question.id)}
        >
          {question.id === selected ? question.answear : question.question}
        </div>
      ))}
    </div>
  );
};

export default CPractice;
