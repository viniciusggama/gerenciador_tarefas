import React from 'react';

const TodoForm = () => {
  return <div>
    <h2>Criar tarefa:</h2>
    <form>
        <input type="text" placeholder='Digite o titulo' />
        <select>
            <option value="">CATEGORIA</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>ADICIONAR</button>
    </form>
  </div>;
};

export default TodoForm;
