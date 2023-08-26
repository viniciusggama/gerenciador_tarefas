import {useState} from 'react';

const TodoForm = ({addtodo}) => {
    const [value,setValue] = useState("");
    const [category, setCat] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addtodo(value,category);
        setValue("");
        setCat("");
        
    };
  return <div>
    <h2>Criar tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o titulo" value={value} onChange={(e) => setValue(e.target.value)} />
        
        <select value={category} onChange={(e) => setCat(e.target.value)}>
            <option value="">CATEGORIA</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
            <option value="Escola">Escola</option>
            <option value="Estagio">Estagio</option>
            <option value="Faculdade">Faculdade</option>
            <option value="Academia">Academia</option>
        </select>
        <button type="submit">ADICIONAR</button>
    </form>
  </div>;
};

export default TodoForm;
