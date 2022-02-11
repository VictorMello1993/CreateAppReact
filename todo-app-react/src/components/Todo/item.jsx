import './todo.css'

const TodoItem = ({text}) => {
  return (
    <div className="item">
      <div className="text">{text}</div>            
    </div>
  )
}

export default TodoItem