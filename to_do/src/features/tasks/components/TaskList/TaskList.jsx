/* eslint-disable react/prop-types */
import TaskCard from "../TaskCard/TaskCard";

function TaskList({tasks, onDelete, onComplete}) {
  return (
    <li>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={{...task, id: index}}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </li>
  );
}

export default TaskList;