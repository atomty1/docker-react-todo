const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span
            onClick={() =>
              onToggle(todo._id, { completed: !todo.completed })
            }
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.title}
          </span>

          <button onClick={() => onDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;