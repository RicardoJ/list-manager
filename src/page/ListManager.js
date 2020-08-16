import React, { useState } from "react";
import uuid from "uuid/v4";
import List from "./List";
import Form from "../components/Form";
import Area from "./Area";

const fakeItems = [
  { name: "Food", id: 1 },
  { name: "Hobbie", id: 2 },
  { name: "Sports", id: 3 },
];

const ListManager = () => {
  const [items, setItems] = useState(fakeItems);
  const [removeItem, setRemoveItem] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addItemToSecondList = (item) =>{ 
    setRemoveItem([...removeItem,item]);}

  const addItem = (name) => setItems([...items, { name, id: uuid() }]);

  const findItem = (item) => setEditItem(item);
  const updateItem = (name, id) => {
    setItems(items.map((item) => (item.id === id ? { name, id } : item)));
  };
  const onRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const onRemoveAll = () => setItems([]);

  return (
    <>
      <List
        items={items}
        onRemoveItem={onRemoveItem}
        onRemoveAll={onRemoveAll}
        onItemClick={addItemToSecondList}
        onEdit={findItem}
      />
      <Form onSubmit={addItem} updateItem={updateItem} editItem={editItem} />
      <Area removeItem={removeItem} />
    </>
  );
};

export default ListManager;
