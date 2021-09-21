
import React from 'react'
import Header from './components/Header';
import AdicionarUsuario from './components/AdicionarUsuario';
import axios from 'axios';
import styled from 'styled-components';

const MainContainerLista = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 4px solid blanchedalmond;
  height: 4vh;
  width: 30vw;
  margin-right: 35vw;
  margin-left: 35vw;  
  margin-top: 1vh;
  background-color: ghostwhite;
`

const BotoesPaginas = styled.button`
    background-color: blanchedalmond;
    border: 2px outset black;
    margin-right: 4px;

        :hover{
            background-color: ghostwhite;
            cursor: pointer;
        }
        :active {
            background-color: lightcoral;
        }
`

const headers = {
  headers: {
    Authorization: "silvio-dias-maryam"
  }
}


class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    usuarios: [],
    paginaLista: false,
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  createUser = () => {

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, headers)
    .then((res) => {
      this.setState({inputEmail: ""})
      this.setState({inputNome: ""})
      alert("Usuário criado com sucesso!")
      this.getAllUsers()
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  getAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', headers)
    .then((res) => {
      this.setState({usuarios: res.data})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  deleteUser = (id) => {
    if (window.confirm("Tem certeza que deseja deletar o usuário?")){
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
      .then((res) => {
        alert('Usuario Deletado.')
        this.getAllUsers()
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    }
  }

  onClickPaginaLista = () => {
    this.setState({paginaLista: true})
  }

  onClickPaginaAdicionar = () => {
    this.setState({paginaLista: false})
  }

  onChangeInputNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }
  render () {
    const usuariosAtivos = this.state.usuarios.map((usuario) => {
      return(
        <MainContainerLista>
          <li id={usuario.id} >{usuario.name}</li>
          <BotoesPaginas onClick={() => this.deleteUser(usuario.id)} >X</BotoesPaginas>
        </MainContainerLista>
      )
    })
    return (
    <div>
      < Header onClickPaginaLista={this.onClickPaginaLista} onClickPaginaAdicionar={this.onClickPaginaAdicionar} />
      {this.state.paginaLista ? 
      (usuariosAtivos)
      :
      (<AdicionarUsuario 
        inputNome={this.state.inputNome} 
        onChangeInputNome={this.onChangeInputNome} 
        inputEmail={this.state.inputEmail} 
        onChangeInputEmail={this.onChangeInputEmail}
        createUser={this.createUser}
        />)
      }
    </div>
  );
  }
  
}

export default App;
