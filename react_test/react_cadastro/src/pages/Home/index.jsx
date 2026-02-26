import { useEffect, useState,useRef } from 'react' // React Hooks (Ferramentos do React) Sem o useState e Ref, a site NÃO atualizaria em tempo real
import './style.css'
import Lixo from '../../assets/lixo.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([]) // Usa para setar os dados na página

  const inputName = useRef() // Utilizado para pegar algo desse input e enviar para o Banco de Dados
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get("/users")

    setUsers(usersFromApi.data) // Seta os Dados dentro de Users
  }

  async function createUsers(){ // Cria o Usuário e envia para o Banco de dados usando o input
    await api.post('/users', {
      name: inputName.current.value, 
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

   async function deleteUsers(id){
    await api.delete(`/users/${id}`)

    getUsers()
  }

  useEffect(() =>{ // Usa para rodar a função após carregar a página
    getUsers()
  }, [])

  return (

    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="name" type="text" ref={inputName}/>
        <input placeholder="Idade" age="age" type="number" ref={inputAge}/>
        <input placeholder="Email" email="email" type="email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar Usuário</button>
      </form>

      {users.map(user => (   // Ele passa por cada elemento dentro do meu array
        <div key={user.id} className="card">
          <div>
            <p>Nome:  {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button onClick={() => deleteUsers(user.id)}> 
            <img src={Lixo} />
          </button>
        </div>

      ))}

    </div>
  )
}

export default Home
