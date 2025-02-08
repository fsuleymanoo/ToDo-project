import { MdOutlineDeleteOutline } from "react-icons/md";

function TodoCard({ task, checkCompleted, fetchTasks, setRefresh }) {
  const USER_ID = 9;
  const formattedDate = task.created_at.split(" ").slice(0, 4).join(" ");

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://3.15.206.121:5000/api/todos/${task.id}?user_id=${USER_ID}`,
        {
          method: "DELETE",
        }
      );
      console.log("DELETE STATUS", response.status)
      if (!response.ok) {
        throw new Error(`Error deleting the task: ${task.id}`);
      }

      setRefresh(prev => !prev)
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white" id="card-items">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center gap-2 ms-2">
          <input
            checked={task.completed}
            onChange={() => checkCompleted(task.id, !task.completed)}
            type="checkbox"
            className={`form-check-input rounded me-2 ${
              task.completed ? "opacity-50" : ""
            }`}
          />
          <div className="card-text text-info-emphasis">
            {task.completed ? (
              <s className="opacity-75">
                {task.title} - {formattedDate}{" "}
              </s>
            ) : (
              `${task.title} - ${formattedDate}`
            )}
          </div>
        </div>
        <div className="ms-auto">
          <button
            onClick={() => handleDelete(task.id)}
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
