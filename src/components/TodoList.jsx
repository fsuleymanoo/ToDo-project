import TodoCard from "./TodoCard";

function TodoList({ tasks, removeTask }) {
  return tasks.length < 1 ? (
    <div className="container w-50 text-center  my-2 text-info-emphasis">
      No tasks, add a task
    </div>
  ) : (
    <div className="mx-auto">
      <div>
        {tasks.map((task) => (
          <TodoCard key={task.id} task={task} removeTask={removeTask} />
        ))}
      </div>

      <div className="d-flex justify-content-between small-text bg-white p-1 mt-1 text-info-emphasis">
        <div>3 task left</div>
        <div className="d-flex gap-2">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
}

export default TodoList;
