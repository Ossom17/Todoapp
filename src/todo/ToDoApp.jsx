import React, { useState } from "react";
import "./todo.css"
//commenting 
export const ToDoApp = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
    }
  };
  const removeTask =() => {
filter()
splice()
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter to add task"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button class="add-btn" onClick={addTask}>Add Task</button>
      <br />
      <br />

      {tasks.map((datas, index) => (  
        
        <div onClick={removeTask} key={index}>
          {datas}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};
