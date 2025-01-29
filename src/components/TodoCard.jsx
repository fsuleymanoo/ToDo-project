import { MdOutlineDeleteOutline } from "react-icons/md";

function TodoCard({ task, removeTask }) {
  return (
    <div className="bg-white" id="card-items">
      <div className="d-flex align-items-center ">
        <div className="d-flex align-items-center gap-2 ms-2">
          <input type="checkbox" className="form-check-input" />
          <div className="card-text text-info-emphasis">{task.task}</div>
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
