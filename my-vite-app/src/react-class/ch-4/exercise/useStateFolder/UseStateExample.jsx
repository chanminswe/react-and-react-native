import React, { useState } from "react";

function UseStateExample() {
  const [name, setName] = useState();

  function nameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label>Name : </label>
      <input value={name} onChange={nameChange} />
      <p>{name}</p>
      <button>Submit</button>
    </div>
  );
}

export default UseStateExample;
