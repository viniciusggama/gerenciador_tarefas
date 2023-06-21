import { useState } from 'react'
import "./App.css"


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text :"Desenvolver aplicação REACT",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text :"Surfar",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 4,
      text :"Treinar",
      category: "pessoal",
      isCompleted: false,
    },
    {
      id: 5,
      text :"Estudar react ate o infinito",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  return (
  <div className='app' > 
      <h1>Tarefas da Semana</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div className='todo'>
            <div className='content'>
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div>
              <button>COMPLETAR</button>
              <button>DEL</button>
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}

export default App
