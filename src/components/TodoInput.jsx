import { useState } from 'react'

export function TodoInput({ addTodo }) {
  const [newInput, setNewInput] = useState('')
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add Task"
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (!newInput) return
          addTodo(newInput)
          setNewInput('')
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}
