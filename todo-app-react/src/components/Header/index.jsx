import './header.css'
import {AiFillPlusSquare} from 'react-icons/ai'
import {AiOutlineMinusSquare} from 'react-icons/ai'

const Header = ({toogle, show}) => {  
  return (
  <div className="header">
    <div className="title">Gerenciador de tarefas</div>
    <div className="add" onClick={toogle}>
      {show ? <AiOutlineMinusSquare size={20}/> : <AiFillPlusSquare size={20}/>}
    </div>
  </div>
  )
}

export default Header;