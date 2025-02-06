import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Items() {
  const [itemName, setItemName] = useState("");
  const navigate = useHistory();

  function findItem() {
    navigate.push(`/item/${itemName}`);
  }
  return (
    <div>
      <p>Items Page</p>
      <input value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <button onClick={findItem}>Order Item</button>
    </div>
  );
}

export default Items;
