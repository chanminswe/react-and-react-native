import React, { useState } from "react";
import MyComponent from "./react-class/ch-3/inclass/MyComponent";

function ToDoList() {
  const [todo, setToDo] = useState([]);
  const [newTd, setNewTd] = useState("");


  //array or object
  function addList() {
    setToDo((prevState) => [...prevState, newTd]);
  }

  return (
    <>
      <input onChange={(event) => setNewTd(event.target.value)} />
      <button onClick={addList}>Add</button>
      {todo.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
