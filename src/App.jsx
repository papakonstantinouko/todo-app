import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

const tabs = ['All', 'Open', 'Completed']
const todoApp = 'todo-app'

const saveTodos = (todos) =>
  localStorage.setItem(todoApp, JSON.stringify(todos))

function App() {
  const [todos, setTodos] = useState([])
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const addTodo = (input) => {
    const newTodoList = [...todos, { input, complete: false }]
    setTodos(newTodoList)
    saveTodos(newTodoList)
  }

  const removeTodo = (input) => {
    const newTodoList = todos.filter((x) => x.input !== input)
    setTodos(newTodoList)
    saveTodos(newTodoList)
  }

  const updateTodo = (input) => {
    const newTodoList = todos.map((x) => {
      if (x.input === input) return { input, complete: !x.complete }
      return x
    })
    setTodos(newTodoList)
    saveTodos(newTodoList)
  }

  useEffect(() => {
    if (!localStorage?.getItem(todoApp)) return
    setTodos(JSON.parse(localStorage.getItem(todoApp)))
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <TodoInput addTodo={addTodo} />
    </>
  )
}

export default App
