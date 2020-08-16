import React, { useState } from "react";
import uuid from "uuid/v4";
import List from "./List";
import Form from "../components/Form";

const fakeItems = [
  { name: "Food", id: 1 },
  { name: "Hobbie", id: 2 },
  { name: "Sports", id: 3 },
];

const ListManager = () => {
  const [items, setItems] = useState(fakeItems);
  const [editItem, setEditItem] = useState(null);

  const addItem = (name) => setItems([...items, { name, id: uuid() }]);

  const findItem = (id) => {
    setEditItem(items.find((item) => item.id === id));
  };
  const updateItem = (name, id) => {
    setItems(items.map((item) => (item.id === id ? { name, id } : item)));
  };
  const removeItemOne = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <List
        items={items}
        removeItemOne={removeItemOne}
        removeAll={removeAll}
        findItem={findItem}
      />
      <Form onSubmit={addItem} updateItem={updateItem} editItem={editItem}/>
    </>
  );
};

export default ListManager;
