import './todo.css'
import { useState } from 'react'

const Form = () => {
  const [text, setText] = useState('');

  const submitTodo = (event) => {
    // event.preventDefault();
    // props.add(text);
    // return setText('');
  };

  return (
    <div className="insert">
      <input 
        min={5}
        type="text" 
        placeholder="Insira uma tarefa"
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