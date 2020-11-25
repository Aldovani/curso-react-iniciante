import React, { useState } from "react";
import ProspsTyps from "prop-types";
import "./taskItem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDdeletTask
}) {
  const [isEditing, setisEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setisEditing(false);
      if (editableTitle.length === 0) {
        onDdeletTask(id);
      }
    }
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div
          onClick={(e) => {
            setisEditing(true);
          }}
        >
          {editableTitle}
        </div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

TaskItem.prototype = {
  id: ProspsTyps.number.isRequired,
  title: ProspsTyps.string.isRequired,
  taskState: ProspsTyps.string.isRequired
};
