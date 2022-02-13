import './todo.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {GoTrashcan} from 'react-icons/go'

const TodoItem = ({text, item, removeItem, mark}) => {
  
  const removeTask = () => removeItem(item)

  const toggleDone = () => {
    mark(item)

    console.log(item)

    const todoItem = document.querySelectorAll('.item')

    console.log(todoItem);

    // if(item.done){
    //   todoItem.classList.add('done')
    // }
    // else {
    //   todoItem.classList.remove('done')
    // }    
  }

  return (
    <div className="item">
      <div className="text">{text}</div>
      <div className="tooltips">
        <AiFillCheckCircle size={20} onClick={toggleDone}/>
        <GoTrashcan size={20} onClick={removeTask}/>
      </div>
    </div>
  )
}

export default TodoItem