import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { GoTrashcan } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa'
import './todo.css'

const TodoItem = ({ text, remove, update, status }) => {
  return (    
    <div className={status ? 'item done' : 'item'}>      
      <div className="text">                     
        {text}
        {status ? <FaCheck size={12}/> : null}
      </div>
      <div className="actions">
        <div className="mark" onClick={update}>
          {status ? <AiFillCloseCircle size={20}/> : <AiFillCheckCircle size={20}/>}
        </div>
        <div className="remove" onClick={remove} >
          <GoTrashcan size={20} />
        </div>        
      </div>
    </div>
  )
}

export default TodoItem