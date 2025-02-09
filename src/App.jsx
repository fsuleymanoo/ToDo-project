import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Theme from "./components/Theme";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [refresh, setRefresh] = useState(false);

  const USER_ID = 9;

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "http://3.15.206.121:5000/api/todos?user_id=" + USER_ID
      );
      const data = await response.json();
      console.log("Tasks: ", data);
      if (response.status == 404) {
        setTasks([]);
        return;
      }
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const handleFilter = () => {
    switch (filter) {
      case "All":
        return tasks;
      case "Active":
        return tasks.filter((task) => !task.completed);
      case "Completed":
        return tasks.filter((task) => task.completed);
    }
  };

  const handleFilterChange = (f) => {
    setFilter(f);
  };

  const checkCompleted = (id, completed) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed } : task))
    );
  };

  const notCompletedCount = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <Theme />
      <div className="col-8 col-lg-4 col-md-5 mx-auto">
        <TodoForm fetchTasks={fetchTasks} />

        <TodoList
          tasks={tasks}
          setRefresh={setRefresh}
          clearCompleted={clearCompleted}
          checkCompleted={checkCompleted}
          notCompletedCount={notCompletedCount}
          handleFilter={handleFilter}
          handleFilterChange={handleFilterChange}
          filter={filter}
          fetchTasks={fetchTasks}
        />
      </div>
    </>
  );
}

export default App;
