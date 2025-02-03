import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { isValidTask } from "../utils.js";

function TodoForm({ addTask }) {


  const [task, setTask] = useState("");
  const [validTask, setValidTask] = useState(true);
  

  const handleTaskInput = (e) => {
    const value = e.target.value;
    setTask(value);
    setValidTask(isValidTask(task));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidTask(task)) {
      return;
    }

    const taskData = {
      id: Date.now(),
      task: task,
      isComplete: false
    };

    addTask(taskData);

    setTask("");
  };

  let option = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = new Date().toLocaleDateString("en-US", option);

  return (
    <div className="form-container mb-1">
      <h2 className="fw-bold text-info-emphasis my-3 text-center fs-2">
        Todo List 
        <span className="fs-4 text-danger-emphasis ms-2"> {formattedDate}</span>
      </h2>

      <form onSubmit={handleSubmit} className="bg-white">
        <div className="bg-white d-flex">
          <input type="checkbox" className="form-check-input rounded ms-2 me-1 my-auto" />
          <input
            onChange={handleTaskInput}
            id="form-input"
            className={`form-control border-0  bg-light ${
              validTask ? "" : "is-invalid"
            } opacity-75`}
            type="text"
            placeholder="Create a new task..."
            value={task}
          />
          <button
            className="text-secondary btn"
            type="submit"
            disabled={!validTask}
          >
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
