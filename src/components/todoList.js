import Todo from './todo.js';

const TodoList = ({todos}) => {
  return (
    <div className="todoList">
      {
        todos.map((todo) => {
          return <Todo todo={todo} key={todo.id}/>
        })
      }
    </div>
  )
}

export default TodoList;
