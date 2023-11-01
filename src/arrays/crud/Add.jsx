import React, { useState } from "react";

const Add = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
