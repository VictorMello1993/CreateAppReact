import './todo.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {GoTrashcan} from 'react-icons/go'

const TodoItem = ({text, item, removeItem, mark}) => {
  
  const removeTask = () => removeItem(item)

  const toggleDone = () => {
    mark(item)

    const todoItem = document.querySelector(`div[id=${item.id}]`)    

    if(item.done){
      todoItem.classList.add('done')
    }
    else {
      todoItem.classList.remove('done')
    }    
  }

  return (
    <div className="item" id={item.id}>
      <div className="text">{text}</div>
      <div className="tooltips">
        <AiFillCheckCircle size={20} onClick={toggleDone}/>
        <GoTrashcan size={20} onClick={removeTask}/>
      </div>
    </div>
  )
}

export default TodoItem