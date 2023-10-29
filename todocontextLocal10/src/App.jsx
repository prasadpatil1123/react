import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'


function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div style={styles.app}>
      <div style={styles.todoContainer}>
        <h1 style={styles.todoHeader}>Manage your Todos</h1>
        <div style={styles.todoList}>
          <TodoForm />
        </div>
        {/* Change flex to flex-col for a column layout */}
        <div className='flex flex-col gap-y-3'>
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </TodoProvider>
  )
}

const styles = {
  app: {
    backgroundColor: '#172842',
    minHeight: 'screen',
    paddingTop: '2rem',
    borderRadius: '25px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  todoContainer: {
    maxWidth: '2xl',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    padding: '1rem 1.5rem',
    color: 'white',
  },
  todoHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  todoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    marginBottom: '2rem',
  },
};

export default App
