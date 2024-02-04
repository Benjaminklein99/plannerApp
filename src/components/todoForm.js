import {useState} from 'react';

const TodoForm = ({todos, setTodos}) => {
  const [input, setInput] = useState('');

  return (
    <form className="todoForm" onSubmit={
      (e) => {
        e.preventDefault();
        const newTodos = [input, ...todos]
        setTodos(newTodos)
        console.log(newTodos)
        setInput('');
      }
    }>
      <input
        type="text"
        placeholder="Add your todo"
        value={input}
        name="text"
        className="todoInput"
        onChange={(e) => { setInput(e.target.value)}}
      /><button>Add todo</button>
    </form>
  );
}


export default TodoForm;
