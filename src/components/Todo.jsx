import React from 'react';

const Todo = ({todo,removeTodo,completeTodo}) => {
  return (
    <div className='todo'
    style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
            <div className='content'>
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div>
              <button className='complete' onClick={()=>completeTodo(todo.id)}>COMPLETAR</button>
              <button className='remove' id='del' onClick={()=> removeTodo(todo.id)}>EXCLUIR</button>
            </div>
          </div>
  );
};

export default Todo;
