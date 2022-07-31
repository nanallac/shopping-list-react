import React, { useState } from "react";

function Form(props) {

  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ( name.length > 0 ) {
      props.addItem(name);
      setName("");
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-shopping-item" className="label__lg">
          What do you need?
        </label>
      </h2>
      <input
        type="text"
        id="new-shopping-item-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
