import { useState } from 'react';
import './App.css';

function App() {
  let taskInput = "";

  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  
  return <div id="app">
  <h1>To-Do List</h1>
  <input onChange={(e) => {
    taskInput = e.target.value;
    console.log(taskInput);
  }} type="text" id="new-task" placeholder="Add a new task"/>
  <button onClick={()=> {
    let tempTasks = tasks;
    
    tempTasks.push(taskInput);

    setTasks([...tempTasks]);
  }} id="add-task">Add</button>
  <ul id="task-list">
    {tasks.map(task => <li>{task}</li>)}
  </ul>
</div>
  
}

export default App
