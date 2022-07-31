import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import ShoppingItem from "./components/ShoppingItem";

function App(props) {

  const [ items, setItems ] = useState(props.items);

  function toggleItemCollected(id) {
    const updatedItems = items.map((item) => {
      if (id === item.id) {
        return {...item, collected: !item.collected}
      }
      return item;
    });
    setItems(updatedItems);
  }

  function deleteItem(id) {
    const remainingItems = items.filter((item) => id !== item.id);
    setItems(remainingItems);
  }

  function editItem(id, newName) {
    const editedItemList = items.map((item) => {
      if (id === item.id) {
        return {...item, name: newName}
      }
      return item;
    });
    setItems(editedItemList);
  }

  const itemList = items.map((item) => (
    <ShoppingItem 
      id={item.id}
      name={item.name}
      collected={item.collected}
      key={item.id}
      toggleItemCollected={toggleItemCollected}
      deleteItem={deleteItem}
      editItem={editItem}
    />
  ));

  const itemsNoun = itemList.length !==1 ? 'items' : 'item';
  const countText = `${itemList.length} ${itemsNoun} remaining`;

  function addItem(name) {
    const newItem = {
      id: "shopping-item-" + nanoid(),
      name: name,
      collected: false
    };
    setItems([...items, newItem]);
  }

  return (
  <div className="shopping-list stack-large">
    <h1>Shopping List</h1>
    <Form addItem={addItem} />
    <h2 id="list-heading">
      {countText}
    </h2>
    <ul
      role="list"
      className="shopping-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {itemList}
    </ul>
  </div>
  )
};

export default App;
