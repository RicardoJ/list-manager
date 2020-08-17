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
  const [removedItems, setRemovedItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addItemToSecondList = (item) => {
    setRemovedItems([...removedItems, item]);
    setItems(items.filter((i) => item.id !== i.id));
  };
  const returnItemToFirstList = (item) => {
    setItems([...items, item]);
    setRemovedItems(removedItems.filter((i) => item.id !== i.id));
  };

  const addItem = (name) => {
    if (editItem === null) {
      setItems([...items, { name, id: uuid() }]);
    } else {
      updateItem(name, editItem.id);
    }
  };

  const findItem = (item) => setEditItem(item);
  const updateItem = (name, id) => {
    setItems(items.map((item) => (item.id === id ? { name, id } : item)));
  };
  const onRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const onRemoveItemFromSecondList = (id) => {
    setRemovedItems(removedItems.filter((item) => item.id !== id));
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
      <Form onSubmit={addItem} editItem={editItem} />
      <Area
        items={removedItems}
        onRemoveItem={onRemoveItemFromSecondList}
        onItemClick={returnItemToFirstList}
        onEdit={findItem}
      />
    </>
  );
};

export default ListManager;
