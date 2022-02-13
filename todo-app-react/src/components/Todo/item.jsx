import './todo.css'

const TodoItem = ({text}) => {  
  return (
    <div className="item">
      <div className="text">{text}</div>
      <div className="tooltips">        
      </div>
    </div>
  )
}

export default TodoItem