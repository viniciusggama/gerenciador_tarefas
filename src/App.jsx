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
   
  const addtodo = (text, category)=>{
      const newTodos = [...todos,{
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }];
      setTodos(newTodos);
  };

  //excluir elementos da tarefa
  const removeTodo = (id) =>{
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null );
    setTodos(filteredTodos);
  }

  //completar elemento
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);

  }

  return (
  <div className='app' > 
      <h1>GERENCIADOR DE TAREFAS</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
         <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addtodo={addtodo}/>
  </div>
  )
}

export default App
