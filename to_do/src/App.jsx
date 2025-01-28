import "./App.css";
import TasksApp from "./features/tasks";

function App() {
  const defaultTasks = ["Task 1", "Task 2", "Task 3"];

  return <TasksApp defaultTasks={defaultTasks} />;
}

export default App;
