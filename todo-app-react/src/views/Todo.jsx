import { useState } from 'react'
import Header from '../components/Header/index'
import FormTodo from '../components/Todo/form'
import TodoItem from '../components/Todo/item'

const Todo = () => {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState([]);

  const AddTask = (task) => setTodo([...todo, task])

  return (
    <div id="todo">
      <Header handle={setShowForm} value={showForm}/>       
      {showForm ? <FormTodo add={AddTask} /> : null}           
      {todo.map((item, index) => <TodoItem key={index} text={item.task}/>)}      
    </div>
  )
}

export default Todo;