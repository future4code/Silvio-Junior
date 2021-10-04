
import React from 'react'
import Header from './components/Header';
import AdicionarUsuario from './components/AdicionarUsuario';
import axios from 'axios';
import styled from 'styled-components';
import PaginaDoUsuario from './components/PaginaDoUsuario';
import GlobalStyle from './theme/GlobalStyle';


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

  :hover{
    cursor: pointer;
  }

  @media (max-width: 768px) {
        width: 80vw;
        margin-right: 10vw;
        margin-left: 13vw;
      }
`

const MainContainerBusca = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 4px solid blanchedalmond;
  height: 30vh;
  width: 30vw;
  margin-right: 35vw;
  margin-left: 35vw;  
  margin-top: 1vh;
  background-color: ghostwhite;

  @media (max-width: 768px) {
        height: 30vh;
        width: 80vw;
        margin-right: 10vw;
        margin-left: 13vw;
      }

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

const Input = styled.input`
    border-left: none;
    border-top: none;
    margin-right: 36px;
    margin-top: 0;
`

const ContainerInputBotao = styled.div`
  margin-bottom: 4vh;
`
const Label = styled.label`
  font-size: 20px;
  margin-top: 4vh;
  
    :hover{
      cursor: pointer;
    }
`

class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    usuarios: [],
    paginaLista: false,
    usuarioPagina: [],
    paginaUsuario: false,
    edicaoUser: false,
    buscaFiltrada: false,
    nomeBusca: ""
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
        this.setState({paginaUsuario: false})
        this.setState({paginaLista: true})
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    }
  }

  onClickPaginaLista = () => {
    this.setState({paginaLista: true})
    this.setState({paginaUsuario: false})
    this.setState({edicaoUser: false})
    this.getAllUsers()
  }

  onClickPaginaAdicionar = () => {
    this.setState({paginaLista: false})
    this.setState({paginaUsuario: false})
    this.setState({edicaoUser: false})
  }

  onChangeInputNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  getUserById = (usuario) => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`, headers)
    .then((res) => {
      this.setState({usuarioPagina: []})
      this.setState({usuarioPagina: res.data})
      this.setState({paginaUsuario: true})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  editarUser = () => {
    this.setState({edicaoUser: true})
  }

  editUser = (user) => {

    let body = {}

    if ((this.state.inputNome !== "") && (this.state.inputEmail !== "")){
      body = {
        name: this.state.inputNome,
        email: this.state.inputEmail
      }
    } else if ((this.state.inputNome !== "") && (this.state.inputEmail === "")){
      body = {
        name: this.state.inputNome,
      }
    } else if ((this.state.inputNome === "") && (this.state.inputEmail !== "")){
      body = {
        email: this.state.inputEmail
      }
    } else {
      body = {
        name: user.name,
        email: user.email
      }
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`, body, headers)
    .then((res) => {
      this.setState({inputEmail: ""})
      this.setState({inputNome: ""})
      alert("Usuário editado com sucesso!")
      this.getAllUsers()
      this.setState({edicaoUser: false})
      this.setState({paginaUsuario: false})
      this.setState({paginaLista: true})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  onChangeBuscaNome = (event) => {
    this.setState({nomeBusca: event.target.value})
  }

  searchUser = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.nomeBusca}`, headers)
    .then((res) => {
      this.setState({usuarios: []})
      this.setState({usuarios: res.data})
      this.setState({nomeBusca:""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }
  render () {
    const usuariosAtivos = this.state.usuarios.map((usuario) => {
      return(
        <MainContainerLista onClick={() => this.getUserById(usuario)}>
          <li id={usuario.id} >{usuario.name}</li>
          <BotoesPaginas onClick={() => this.deleteUser(usuario.id)} >X</BotoesPaginas>
        </MainContainerLista>
      )
    })
    return (
    <div>
      <GlobalStyle />
      < Header onClickPaginaLista={this.onClickPaginaLista} onClickPaginaAdicionar={this.onClickPaginaAdicionar} />
      {(this.state.paginaLista && !this.state.paginaUsuario ) && 
      (<MainContainerBusca>
        <h1>Lista de Usuários</h1>
        <Label htmlFor="buscaNome">Buscar Usuário por Nome</Label>
        <ContainerInputBotao>
          <Input placeholder="Nome..." id="buscaNome" value={this.state.nomeBusca} onChange={this.onChangeBuscaNome} />
          <BotoesPaginas onClick={this.searchUser} >Enviar</BotoesPaginas>
        </ContainerInputBotao>
      </MainContainerBusca>)}
      {this.state.paginaUsuario ?
      (<PaginaDoUsuario 
      usuarioPagina={this.state.usuarioPagina} 
      deleteUser={this.deleteUser} 
      edicaoUser={this.state.edicaoUser} 
      editarUser={this.editarUser} 
      inputNome={this.state.inputNome} 
      onChangeInputNome={this.onChangeInputNome} 
      inputEmail={this.state.inputEmail} 
      onChangeInputEmail={this.onChangeInputEmail}
      editUser={this.editUser}
      />)
      :
      (this.state.paginaLista ? 
        (usuariosAtivos)
        :
        (<AdicionarUsuario 
          inputNome={this.state.inputNome} 
          onChangeInputNome={this.onChangeInputNome} 
          inputEmail={this.state.inputEmail} 
          onChangeInputEmail={this.onChangeInputEmail}
          createUser={this.createUser}
          />)
      )}
    </div>
  );
  }
  
}

export default App;
