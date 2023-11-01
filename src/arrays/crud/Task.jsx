import React, { useState } from "react";

const Task = ({ todo, onDelete, onEdit }) => {
  const [isEdited, setIsEdited] = useState(false);

  let editContent;
  if (isEdited) {
    editContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onEdit({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEdited(false)}>Save</button>
      </>
    );
  } else {
    editContent = (
      <>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onEdit({ ...todo, done: e.target.checked });
          }}
        />
        {todo.title}{" "}
        <button
          onClick={() => {
            setIsEdited(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div>
      {editContent}
      <button
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
