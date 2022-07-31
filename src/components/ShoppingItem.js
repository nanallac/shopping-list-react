import React, { useState, useEffect } from "react";

export default function ShoppingItem(props) {

  const [name, setName] = useState(props.name);

  function handleChange(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    props.editItem(props.id, name);
  }, [name]);

  return (
    <li key={props.id} className="shopping-item stack-small">
      <div className="c-cb">
        <input 
          id={props.id}
          type="checkbox"
          defaultChecked={props.collected}
          onChange={() => props.toggleItemCollected(props.id)}
        />
    
        <label htmlFor={props.id}>
          <input
            type="text"
            id={props.id}
            className="input shopping-input"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </label>
    
      </div>
      <div className="btn-group">
        <button 
          type="button" 
          className="btn btn__danger"
          onClick={() => props.deleteItem(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
