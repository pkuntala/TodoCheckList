import { useEffect, useState } from "react"
import "./styles.css"
import TodoForm  from "./TodoForm"
import TodoList from "./TodoList"

function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  }) 

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    return(
      setTodos(currentTodos => {
        return [
            ...currentTodos,
            {id: crypto.randomUUID(), title, completed: false},
          ]
      })
    )
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      <TodoForm onSubmit = {addTodo}/>
      <h1 className="header"> To do List </h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
    
  )
}

export default App
