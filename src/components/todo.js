import Button from '@mui/material/Button';


const Todo = ({todo}) => {
  return (
    <div className="todo">
      <p>{todo.text}</p>
    </div>

  )
}

export default Todo;