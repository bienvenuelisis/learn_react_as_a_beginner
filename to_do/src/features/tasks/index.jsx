import { useState, useRef, useEffect } from "react";
import TaskList from "./components/TaskList";

// eslint-disable-next-line react/prop-types
function TasksApp({ defaultTasks }) {
  let taskInput = "";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
      response.json().then((data) => {
        const tempTasks = data.map((task) => task.title);

        setTasks(tempTasks);
      });
    });
  }, []);

  const handleDelete = (index) => {
    const newTaskList = tasks.filter((_, i) => i !== index);
    setTasks(newTaskList);
  };

  const inputRef = useRef(null);

  const [tasks, setTasks] = useState(defaultTasks);

  return (
    <div id="app">
      <h1>To-Do List</h1>
      <input
        ref={inputRef}
        defaultValue={taskInput}
        onChange={(e) => {
          taskInput = e.target.value;
        }}
        type="text"
        id="new-task"
        placeholder="Add a new task"
      />
      <button
        onClick={() => {
          let tempTasks = tasks;

          tempTasks.push(taskInput);

          setTasks([...tempTasks]);

          inputRef.current.value = "";
        }}
        id="add-task"
      >
        Add
      </button>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default TasksApp;
