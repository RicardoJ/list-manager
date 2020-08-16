import React, { useState } from "react";
import uuid from "uuid/v4";
import List from "./List";
import Form from "../components/Form";

const fakeItems = [
  { item: "Food", id: 1 },
  { item: "Hobbie", id: 2 },
  { item: "Sports", id: 3 },
];

const ListManager = () => {
  const [items, setItems] = useState(fakeItems);
  const addItem = (item) => setItems([...items, { item, id: uuid() }]);
  const removeItemOne = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <List items={items} removeItemOne={removeItemOne} />
      <Form onSubmit={addItem} />
    </>
  );
};

export default ListManager;
