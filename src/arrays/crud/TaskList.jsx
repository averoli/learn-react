import React from "react";
import Task from "./Task";

const TaskList = ({ todos, onDelete, onEdit }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onDelete={onDelete} onEdit={onEdit} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
