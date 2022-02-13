import './todo.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {GoTrashcan} from 'react-icons/go'

const TodoItem = ({text}) => {  
  return (
    <div className="item">
      <div className="text">{text}</div>
      <div className="tooltips">
        <AiFillCheckCircle size={20}/>
        <GoTrashcan size={20}/>
      </div>
    </div>
  )
}

export default TodoItem