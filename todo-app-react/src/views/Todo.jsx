import { useState } from 'react'
import Header from '../components/Header/index'
import FormTodo from '../components/Todo/form'

const Todo = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div id="todo">
      <Header handle={setShowForm} value={showForm}/> 

      {/* Renderização condicional em função do estado atribuído no useState()*/}
      {showForm ? <FormTodo /> : null}           
    </div>
  )
}

export default Todo;