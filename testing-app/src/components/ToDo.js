import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [note, setNote] = useState("");

  const addTask = () => {
    if (note.trim() === "") return; // Don't add empty tasks
    setTasks([...tasks, note]);
    setNote(""); // Clear input after adding
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove)); // Remove the task
  };

  return (
    <div>
      <label>Add your task</label>
      <br />
      <input 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        placeholder="task" 
      />
      <br />
      <button onClick={addTask} disabled={!note}>Add Task</button>
      <br />
      
      {tasks.length > 0 ? (
        <div>
          {tasks.map((task, index) => (
            <div key={index}>
              <p>{task}</p>
              <button onClick={() => removeTask(task)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tasks currently</p>
      )}
    </div>
  );
}

export default ToDo;
