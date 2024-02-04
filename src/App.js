import './App.css';
import Welcome from './components/welcome.js';
import TodoForm from './components/todoForm.js';
import TodoList from './components/todoList.js';
import React, { useState } from 'react';

function App() {

  // const [isOpen, close] = useState(true);
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      {/* {
        isOpen && <Welcome close={close}/>
      }
      {
        !isOpen && <TodoForm setTodos={setTodos} todos={todos} />
      } */}
      <TodoForm setTodos={setTodos} todos={todos} />
      {/* <TodoList todos={todos}/> */}
    </div>
  );
}

export default App;
