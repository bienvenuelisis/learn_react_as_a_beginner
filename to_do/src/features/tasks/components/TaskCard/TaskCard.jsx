/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TaskCard.css";
import { FaCheck, FaTrash } from "react-icons/fa";


function TaskCard({ task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(task.done);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={`task-card ${isCompleted ? "completed" : ""}`}>
      <span>{task.title}</span>
      <div className="actions">
        <button onClick={handleComplete}>
          <FaCheck /> {isCompleted ? "Undo" : "Complete"}
        </button>
        <button onClick={onDelete}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;