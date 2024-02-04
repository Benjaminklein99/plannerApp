import Todo from './todo.js';

const TodoList = ({todos}) => {
  return (
    <div className="todoList">
      {
        todos.map((todo, i) => {
          return <Todo todo={todo} key={i}/>
        })
      }
    </div>
  )
}

export default TodoList;
