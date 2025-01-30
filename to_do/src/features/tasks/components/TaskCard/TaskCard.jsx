/* eslint-disable react/prop-types */
import "./TaskCard.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const TaskCard = ({ task, onDelete, onComplete }) => {
  
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <span>{task.title}</span>
      <div className="actions">
        <button onClick={() => onComplete(task.id)}>
          <FaCheck /> {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;