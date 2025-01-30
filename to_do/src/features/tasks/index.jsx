import { useRef } from "react";
import TaskList from "./components/TaskList/TaskList";
import TasksTitle from "./components/TaskTitle/TaskTitle";
import useTasksStore from "./data/store/tasksStore";

function Tasks() {
  const { tasks, setTasks, onDelete, onComplete } = useTasksStore();

  let taskInput = "";
  const inputRef = useRef(null);

  return (
    <div id="app">
      <TasksTitle
        unCompletedTasks={tasks.filter((task) => !task.completed).length}
      />
      <input
        ref={inputRef}
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

          tempTasks.push({ title: taskInput, completed: false });

          setTasks([...tempTasks]);

          inputRef.current.value = "";
        }}
        id="add-task"
      >
        Add
      </button>
      <TaskList tasks={tasks} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
}

export default Tasks;
