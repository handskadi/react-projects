import React from "react";

import styles from "./GoalList.module.css";

const GoalList = (props) => {
  const listItems = props.goals;
  const listItem = listItems.map((goal) => <li key={goal.id}>{goal.text}</li>);
  return (
    <div>
      <h2 className={styles["course-goals"]}>Course Goals</h2>
      <ul className={styles["goal-list"]}>{listItem}</ul>
    </div>
  );
};

export default GoalList;
