import { useState } from 'react';
import './App.css';
// Criando componentes React - forma tradicional
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//Criando componentes utilizando arrow function dessa forma, é preciso ter um retorno implícito
const App = () => {

  //Utilizando hook para criar um estado local de um componente React
  // let [idade, setIdade] = useState(28);
  // let [nome, setNome] = useState('Victor');
  
  const [data, setData] = useState({
    nome: '',
    idade: ''
  })

  const [alunos, setAlunos] = useState([{nome: 'Victor', idade: 28}]);

  // const x =  useState(33);
  // console.log(x)

  //Função que tenta alterar o valor de uma variável 'idade' num estado
  //Porém, em React, nunca pode ser mutável
  // Para que isso funcione, é preciso chamar o método declarado do useState
  // const mudarIdade = () => {
  //   //Não terá o valor alterado
  //   // idade = 20
  //   // return idade

  //   //Agora terá um valor alterado
  //   // setIdade(20);    
  // }

  //Alterando estados pelo evento disparado
  // const mudarNome = (event) => setNome(event.target.value)
  // const mudarIdade = (event) => setIdade(event.target.value)


  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  
  const AddAluno = () => {
    setAlunos([...alunos, data])
    setData({})
  }
  
  return(
  <div className="App">
    <input type="text" name="nome" value={data.nome || ''} placeholder="Nome" onChange={handleChange}/>
    <input type="number" name="idade" value={data.idade || ''} placeholder="Idade" onChange={handleChange}/>        
    <button onClick={AddAluno}>Adicionar</button>    
    <hr/>
    {JSON.stringify(alunos)}
  </div>
  )
}

export default App;
