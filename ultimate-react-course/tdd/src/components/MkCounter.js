import React, { useState } from "react";

function MkCounter({ initialValue }) {
  const [count, setCount] = useState(initialValue ?? 0);

  const add = () => {
    setCount((c) => c + 1);
  };
  const remove = () => {
    setCount((c) => {
      const result = c - 1;
      if (result < 0) {
        return 0;
      }
      return result;
    });
  };

  return (
    <div>
      <h1>Mk Counter</h1>

      <button onClick={add}>Add</button>
      <span>{count}</span>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default MkCounter;
