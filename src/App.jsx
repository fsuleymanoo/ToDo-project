import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="col-lg-4 col-md-5 col-sm-7 mx-auto">
        <TodoForm addTask={addTask} />

        <TodoList tasks={tasks} removeTask={removeTask} />
      </div>
    </>
  );
}

export default App;
