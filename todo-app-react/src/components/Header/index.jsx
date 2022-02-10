import './header.css'
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiOutlineMinusSquare} from 'react-icons/ai'

// O handle e value são propriedades do objeto props (parâmetro padrão de uma função de componente)
const Header = ({handle, value} /*props*/) => {  

  // Disparando o evento de click para mostrar o formulário dentro do header
  const AbrirForm = () => handle(!value)

  return (
  <div className="header">
    <div className="title">Gerenciador de tarefas</div>
    <div className="add" onClick={AbrirForm}>
      {value ? <AiOutlineMinusSquare size={20}/> : <AiFillPlusSquare size={20}/>}
    </div>
  </div>
  )
}

export default Header;