import React, { useState } from "react";
import uuid from "uuid/v4";

const fakeItems = [
    { name: "Food", id: 1 },
    { name: "Hobbie", id: 2 },
    { name: "Sports", id: 3 },
  ];

  /*const [items, setItems] = useState(fakeItems);
  const [editItem, setEditItem] = useState(null);
*/
 // export const addItem = (name, items) => setItems([...items, { name, id: uuid() }]);
/*
  export const findItem = (id) => {
    setEditItem(items.find((item) => item.id === id));
  };
  export const updateItem = (name, id) => {
    setItems(items.map((item) => (item.id === id ? { name, id } : item)));
  };
  export const removeItemOne = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  export const removeAll = () => {
    setItems([]);
  };*/