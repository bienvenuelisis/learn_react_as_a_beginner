import TaskCard from "./TaskCard/TaskCard";

/* eslint-disable react/prop-types */
function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={{ title: task, done: false }}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
