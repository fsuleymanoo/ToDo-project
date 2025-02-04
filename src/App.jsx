import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Theme from "./components/Theme";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.isComplete));
  };

  const handleFilter = () => {
    switch (filter) {
      case "All":
        return tasks;
      case "Active":
        return tasks.filter((tasks) => !tasks.isComplete);
      case "Completed":
        return tasks.filter((tasks) => tasks.isComplete);
    }
  };

  const handleFilterChange = (f) => {
    setFilter(f);
  }

  const checkCompleted = (id, isComplete) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isComplete } : task))
    );
  };

  const notCompletedCount = tasks.filter((task) => !task.isComplete).length;

  return (
    <>
      <Theme />
      <div className="col-8 col-lg-4 col-md-5 mx-auto">
        <TodoForm addTask={addTask} />

        <TodoList
          tasks={tasks}
          removeTask={removeTask}
          clearCompleted={clearCompleted}
          checkCompleted={checkCompleted}
          notCompletedCount={notCompletedCount}
          handleFilter={handleFilter}
          handleFilterChange={handleFilterChange}
          filter={filter}
        />
      </div>
    </>
  );
}

export default App;
