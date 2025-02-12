import TodoCard from "./TodoCard";

function TodoList({
  tasks,
  clearCompleted,
  checkCompleted,
  notCompletedCount,
  handleFilter,
  handleFilterChange,
  filter,
  fetchTasks,
  setRefresh,
}) {
  const USER_ID = 9;
  const handleDelete = async (elementID) => {
    try {
      const response = await fetch(
        `http://3.15.206.121:5000/api/todos/${elementID}?user_id=${USER_ID}`,
        {
          method: "DELETE",
        }
      );
      console.log("DELETE STATUS", response.status);
      if (!response.ok) {
        throw new Error(`Error deleting the task: ${elementID}`);
      }

      setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAllCompleted = async () => {
    const completedTasks = tasks.filter((item) => item.completed);
    await completedTasks.map((task) => handleDelete(task.id));
    setRefresh((prev) => !prev);
  };

  return tasks.length < 1 ? (
    <div className="container w-50 text-center  my-2 text-info-emphasis">
      No tasks, add a task
    </div>
  ) : (
    <div className="mx-auto">
      <div>
        {handleFilter().map((task) => (
          <TodoCard
            key={task.id}
            task={task}
            checkCompleted={checkCompleted}
            fetchTasks={fetchTasks}
            setRefresh={setRefresh}
          />
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-between small-text bg-white p-1 mt-1">
        <div className="f-btn">
          <span>{notCompletedCount}</span>{" "}
          {notCompletedCount >= 2 ? "tasks" : "task"} left
        </div>
        <div className="d-flex gap-2">
          <div
            onClick={() => handleFilterChange("All")}
            className={`btn btn-sm p-0 f-btn border-0 ${
              filter === "All" ? "active" : ""
            }`}
          >
            All
          </div>
          <div
            onClick={() => handleFilterChange("Active")}
            className={`btn btn-sm p-0 f-btn border-0 ${
              filter === "Active" ? "active" : ""
            }`}
          >
            Active
          </div>
          <div
            onClick={() => handleFilterChange("Completed")}
            className={`btn btn-sm p-0 f-btn border-0 ${
              filter === "Completed" ? "active" : ""
            }`}
          >
            Completed
          </div>
        </div>
        <div
          className="btn btn-info-emphasis p-0 f-btn"
          onClick={deleteAllCompleted}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
}

export default TodoList;
