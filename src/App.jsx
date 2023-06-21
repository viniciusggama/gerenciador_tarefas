import { useState } from 'react';
import Todo from './components/Todo';
import "./App.css";
import TodoForm from './components/TodoForm';


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
  ]);

  return (
  <div className='app' > 
      <h1>Tarefas da Semana</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
         <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm />
  </div>
  )
}

export default App
