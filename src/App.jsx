import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState([])
  const [input, setInput] = useState("")

  const add = () => {
    if (input.trim()) {
      setTask([...task, input])
      setInput("")
    }
  }

  const deleteTask = (indexToDelete) => {
    setTask(task.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">To-Do List</h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter Your Task here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-400"
          />
          <button
            onClick={add}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 focus:outline-none"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-3">
          {task.map((task, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
              <span className="text-gray-800">{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 font-semibold hover:text-red-600 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
