import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Theme from "./components/Theme";

function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.isComplete));
  };


  const checkCompleted = (id, isComplete) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isComplete } : task))
    );
  };

  const notCompletedCount = (tasks.filter(task => !task.isComplete)).length;



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
        />
      </div>
    </>
  );
}

export default App;
