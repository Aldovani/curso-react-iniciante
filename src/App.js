import React, { useState } from "react";
import "./styles.css";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";

let idAcc = 0;
const gerateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: gerateId(),
      title,
      state
    };
    setTask((existingTask) => {
      return [...existingTask, newTask];
    });
  };

  const onDdeletTask = (id) => {
    setTask((existingTask) => {
      return existingTask.filter((task) => {
        task.id !== id;
      });
    });
  };

  const onTaskUpdate = (id, title, state) => {
    setTask((existingTask) => {
      return existingTask.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={onTaskUpdate}
          onDdeletTask={onDdeletTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={onTaskUpdate}
          onDdeletTask={onDdeletTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={onTaskUpdate}
          onDdeletTask={onDdeletTask}
        />
      </div>
    </div>
  );
}
