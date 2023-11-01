import "./App.css";
import Todo from "./arrays/crud/Todo";
import InsertingIntoArray from "./arrays/inserting-into-array";
import ShoppingCart from "./arrays/remove-item-from-sc";

function App() {
  return (
    <>
      <InsertingIntoArray />
      <ShoppingCart />
      <Todo />
    </>
  );
}

export default App;
