import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "./api/todoApi";

const  App = ()=> {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (todo) => {
    await createTodo(todo);
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleToggle = async (id, data) => {
    await updateTodo(id, data);
    fetchTodos();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Todo App</h1>
      <h2>I know github actions</h2>
      
      <TodoForm onAdd={handleAdd} />

      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
