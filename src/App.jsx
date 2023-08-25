import { useState } from 'react';
import Todo from './components/Todo';
import "./App.css";
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text :"ATIVIDADE PLANEJADA 1",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text :"ATIVIDADE PLANEJADA 2",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 4,
      text :"ATIVIDADE PLANEJADA 3",
      category: "pessoal",
      isCompleted: false,
    },
    {
      id: 5,
      text :"ATIVIDADE PLANEJADA 4",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  return (
  <div className='app' > 
      <h1>GERENCIADOR DE TAREFAS</h1>
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
