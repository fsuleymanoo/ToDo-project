import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";

function TodoCard({ task, removeTask, checkCompleted}) {




  return (
    <div className="bg-white" id="card-items">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center gap-2 ms-2">
          <input checked={task.isComplete} onChange={() => checkCompleted(task.id, !task.isComplete)} type="checkbox" className={`form-check-input rounded me-2 ${task.isComplete ? "opacity-50" : ""}`} />
          <div className="card-text text-info-emphasis">{task.isComplete ? <s className="opacity-75">{task.task}</s> : task.task}</div>
        </div>
        <div className="ms-auto">
          <button
            onClick={() => removeTask(task.id)}
            className="btn text-secondary ms-auto"
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
