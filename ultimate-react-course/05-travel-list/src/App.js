import React, { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

function App() {
  const [items, setItems] = useState([]);

  function addItemsHandler(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItemHandler(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleeItemHandler(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearListHandler() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItemsHandler} />
      <PackingList
        items={items}
        setItemts={setItems}
        onDeleteItems={deleteItemHandler}
        onToggleItems={toggleeItemHandler}
        onClearItems={clearListHandler}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
