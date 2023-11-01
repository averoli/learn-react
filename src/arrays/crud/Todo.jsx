import React, { useState } from "react";
import Add from "./Add";
import TaskList from "./TaskList";

let nextId = 3;

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

let date = new Date();
let currentDate = `${date.getDate()}.${
  date.getMonth() + 1
}.${date.getFullYear()}`;

const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: nextId++, title: newTodo, done: false }]);
  };

  const handleDelete = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  const handleEdit = (editedTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === editedTodo.id) {
          return editedTodo;
        } else {
          return t;
        }
      })
    );
  };
  return (
    <>
      <h1>What I need to do {currentDate}</h1>
      <Add onAddTodo={handleAddTodo} />
      <TaskList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};

export default Todo;
