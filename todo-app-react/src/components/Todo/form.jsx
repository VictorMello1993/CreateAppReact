import './todo.css'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

const Form = ({add}) => {
  const [text, setText] = useState('');
  
  const submitTodo = (event => {    
    add({id: uuid(), task: text, done: false})
    setText('')    
  });

  return (
    <div className="insert">
      <input 
        min={5}
        type="text" 
        placeholder="Insira uma tarefa..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        />
        <button disabled={!text} onClick={submitTodo}>
          ADD  
        </button>
    </div>
  )
}

export default Form;