import { useState } from 'react'
import Header from '../components/Header/index'
import FormTodo from '../components/Todo/form'
import TodoItem from '../components/Todo/item'

const Todo = () => {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState([]);

  const AddTask = (task) => setTodo([...todo, task])

  const RemoveTodoItem = (task) => {
    const taskFound = todo.find(item => item.id === task.id) 
    
    if(taskFound){
      const indexToRemove = todo.indexOf(taskFound);
      todo.splice(indexToRemove, 1);
    }
    setTodo([...todo])
  }

  const MarkAsDone = (task) => {
    const taskFound = todo.find(item => item.id === task.id)
    
    taskFound.done = !taskFound.done

    console.log(taskFound)

    setTodo([...todo])    
  }

  return (
    <div id="todo">
      <Header handle={setShowForm} value={showForm}/>       
      {showForm ? <FormTodo add={AddTask} /> : null}           
      {todo.map((item, index) => (
        <TodoItem key={index} 
                  text={item.task} 
                  item={item} 
                  removeItem={RemoveTodoItem}                  
                  mark={MarkAsDone}/>))}
    </div>
  )
}

export default Todo;