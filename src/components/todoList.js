import Todo from './todo.js';

const TodoList = ({todos}) => {
  return (
    <div className="todoList">
      {
        todos.map((todo) => {
          return <Todo todo={todo} />
        })
      }
    </div>
  )
}

export default TodoList;
