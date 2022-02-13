import './todo.css'
import { useState } from 'react'

const Form = ({actions}) => {
  const [text, setText] = useState('');
  return (
    <div className="insert">
      <input 
        min={5}
        type="text" 
        placeholder="Insira uma tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
        />

        {/* CUIDADO! Funções void sem parâmetros sendo passadas no bind, são automaticamente executadas */}
        {/* Funções com parâmetro é preciso declarar uma função de bind, da forma () => funcao(param) */}
        {/* Motivo: React é one way data-bind */}
        <button disabled={!text} onClick={() => actions.add(text)}>
          ADD
        </button>
    </div>
  )
}

export default Form;