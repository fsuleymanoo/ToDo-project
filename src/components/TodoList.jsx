import TodoCard from "./TodoCard";

function TodoList({
  tasks,
  removeTask,
  clearCompleted,
  checkCompleted,
  notCompletedCount
}) {
  return tasks.length < 1 ? (
    <div className="container w-50 text-center  my-2 text-info-emphasis">
      No tasks, add a task
    </div>
  ) : (
    <div className="mx-auto">
      <div>
        {tasks.map((task) => (
          <TodoCard
            key={task.id}
            task={task}
            removeTask={removeTask}
            checkCompleted={checkCompleted}
          />
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-between small-text bg-white p-1 mt-1">
        <div className="f-btn">
          <span>{notCompletedCount}</span> {notCompletedCount>=2 ? "tasks" : "task"}  left
        </div>
        <div className="d-flex gap-2">
          <div className="btn btn-sm p-0 f-btn active border-0">
            All
          </div>
          <div className="btn btn-sm p-0 f-btn">
            Active
          </div>
          <div className="btn btn-sm p-0 f-btn" >
            Completed
          </div>
        </div>
        <div
          className="btn btn-info-emphasis p-0 f-btn"
          onClick={clearCompleted}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
}

export default TodoList;
