import React, { useState } from "react";

import styles from "./NewGoal.module.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  function addGoalHandler(event) {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    setEnteredText("");
    props.onAddGoal(newGoal);
  }

  function textChangeHandler(event) {
    setEnteredText(event.target.value);
  }
  return (
    <form className={styles["new-goal"]} onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
