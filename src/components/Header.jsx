export function Header({ todos }) {
  const openTasks = todos.filter((x) => !x.complete).length
  const tasksText = openTasks === 1 ? 'task' : 'tasks'
  return (
    <header>
      <h1 className="text-gradient">
        You have {openTasks} open {tasksText}.
      </h1>
    </header>
  )
}
