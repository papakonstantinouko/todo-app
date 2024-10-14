import { TodoCard } from './TodoCard'

export function TodoList({ todos, selectedTab, removeTodo, updateTodo }) {
  let filteredTodos
  switch (selectedTab) {
    case 'All':
      filteredTodos = todos
      break
    case 'Open':
      filteredTodos = todos.filter((x) => !x.complete)
      break
    case 'Completed':
      filteredTodos = todos.filter((x) => x.complete)
      break
  }

  return (
    <>
      {filteredTodos.map((todo, index) => {
        return (
          <TodoCard
            key={index}
            todo={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        )
      })}
    </>
  )
}
