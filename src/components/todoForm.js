import {useState} from 'react';

const TodoForm = ({setTodo, todos}) => {
  const [input, setInput] = useState('')

  return (
    <form className="todoForm">
      <input
        type="text"
        placeholder="Add your todo"
        value={input}
        name="text"
        className="todoInput"
        onChange={(e) => { setInput(e.target.value)}}
      /><button onClick={() => { setTodo([input, ...todos])}}>Add todo</button>
    </form>
  );
}


export default TodoForm;
