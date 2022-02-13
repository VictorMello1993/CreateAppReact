import { useState } from 'react'
import Header from '../components/Header/index'
import FormTodo from '../components/Todo/form'
import {v4 as uuid} from 'uuid'
import Lista from '../components/Todo/list.jsx'

const Todo = () => {
  const [showForm, setShowForm] = useState(false)
  const [todos, setTodo] = useState([]);

  const toogleForm = () => setShowForm(!showForm);

  const formatTask = (text) => ({
    id: uuid(),
    text,
    status: false
  })

  /*Declarando funções de composição (funções dentro de um objeto ou dentro de uma função) 
  para representar as ações do formulário (adicionar, remover e atualizar)*/
  const actions = {
    add: (text) => setTodo([...todos, formatTask(text)]),

    remove: (id) => {
      const task = todos.find(item => item.id === id)
      const index = todos.indexOf(task);
      
      todos.splice(index, 1)

      setTodo([...todos])
    },

    update: (id) => {
      const task = todos.find(item => item.id === id)
      
      task.status = !task.status;

      setTodo([...todos])
    }
  }

  return (
    <div id="todo">
      <Header toogle={toogleForm} show={showForm}/>
      {showForm ? <FormTodo actions={actions} /> : null}            
      <Lista todos={todos} actions={actions}/>
    </div>
  )
}

export default Todo;