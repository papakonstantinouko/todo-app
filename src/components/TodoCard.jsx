export function TodoCard({ todo, removeTodo, updateTodo }) {
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.complete} onClick={() => updateTodo(todo.input)}>
          <h6>Done</h6>
        </button>
        <button onClick={() => removeTodo(todo.input)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
