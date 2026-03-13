import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getTodos = () => API.get("/todos");

export const createTodo = (todo) => API.post("/todos", todo);

export const updateTodo = (id, data) => API.put(`/todos/${id}`, data);

export const deleteTodo = (id) => API.delete(`/todos/${id}`);