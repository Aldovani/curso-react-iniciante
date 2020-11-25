import React from "react";
import ProspsTyps from "prop-types";
import TaskItem from "../TaskItem/taskItem";
import "./styles.css";
import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDdeletTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDdeletTask={onDdeletTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.prototype = {
  title: ProspsTyps.string.isRequired,
  onAddTask: ProspsTyps.func.isRequired,
  tasks: ProspsTyps.array.isRequired
};
