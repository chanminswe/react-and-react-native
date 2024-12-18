import React, { useEffect, useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");

  function addList() {
    setTodo([...todo, item]);
  }

  function removeList(index) {
    const newTodo = todo.filter((td, ind) => ind !== index);
    console.log(newTodo);
    setTodo(newTodo);
  }

  useEffect(() => {
    console.log("List Changed !");
  }, [todo]);

  return (
    <div className="todo-main">
      <div className="todo-container">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="todo-input"
        />
        <div className="btn-container">
          <button onClick={addList} className="add-btn">
            Add
          </button>
        </div>
        {todo.map((i, index) => (
          <div className="todo-list">
            <p key={i}>{i}</p>
            <button
              onClick={() => removeList(index)}
              key={index}
              className="remove-btn"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
