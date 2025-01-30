import Tasks from "./features/tasks";
import "./App.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useEffect } from "react";
import useTasksStore from "./features/tasks/data/store/tasksStore";

function App() {
  const { tasks, setTasks } = useTasksStore();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const tasks = data.map((task) => {
          return {
            title: task.title,
            completed: task.completed,
          };
        });

        console.log(tasks);

        setTasks(tasks);
      });
  }, [setTasks]);

  return tasks ? (
    <Tasks defaultTasks={tasks} />
  ) : (
    <AiOutlineLoading3Quarters />
  );
}

export default App;
