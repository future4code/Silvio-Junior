import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ContainerPai = styled.div`
  display: grid;
  grid-template-columns: 1fr 30vw;
`

const FormularioPostagem = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  height: 55vh;
  padding-left: 8px;
`
class App extends React.Component {
  state = {
    arrayDePosts: [
          {
          nomeUsuario: 'paulinha',
          fotoUsuario: 'https://picsum.photos/50/50?random=1',
          fotoPost: 'https://picsum.photos/200/150?random=1'
          },
          {
          nomeUsuario: 'joaozinho',
          fotoUsuario: 'https://picsum.photos/50/?random=2',
          fotoPost: 'https://picsum.photos/200/150?random=2'
          },
          {
          nomeUsuario: 'mariazinha',
          fotoUsuario: 'https://picsum.photos/50/50?random=3',
          fotoPost: 'https://picsum.photos/200/150?random=3'
          }
        ],
    nomeUsuarioInput: "",
    fotoUsuarioInput: "",
    fotoPostInput: ""
  }

  postarFoto = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuarioInput,
      fotoUsuario: this.state.fotoUsuarioInput,
      fotoPost: this.state.fotoPostInput
    }

    const novaArrayDePosts = [novoPost, ...this.state.arrayDePosts]
    
    this.setState({arrayDePosts: novaArrayDePosts})
    this.setState({nomeUsuarioInput: ""})
    this.setState({fotoUsuarioInput: ""})
    this.setState({fotoPostInput: ""})
  }

  onChangeInputNome = (event) => {
    this.setState({nomeUsuarioInput: event.target.value})
  }

  onChangeFotoUsuario = (event) => {
    this.setState({fotoUsuarioInput: event.target.value})
  }

  onChangeFotoPost = (event) => {
    this.setState({fotoPostInput: event.target.value})
  }
  render() {
    const postUsuario = this.state.arrayDePosts.map((post) => {
      return(
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
    return (
      <ContainerPai>
        <MainContainer>
          {postUsuario}
        </MainContainer>
        <FormularioPostagem>
          <h3>Postar Nova Foto</ h3>
          <div>
            <label>Nome do Usuário</label>
            <br />
            <input
            value={this.state.nomeUsuarioInput}
            onChange={this.onChangeInputNome}
            placeholder={"Ex.: fulaninho123"}
            />
          </div>
          <hr />
          <div>
            <label>Foto de Perfil (copie e cole para teste: https://picsum.photos/50/50?random=4)</label>
            <br />
            <input
            value={this.state.fotoUsuarioInput}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Foto de Perfil do Usuário"}
            />
          </div>
          <hr />
          <div>
            <label>Foto do Post (copie e cole para teste: https://picsum.photos/200/150?random=4)</label>
            <br />
            <input
            value={this.state.fotoPostInput}
            onChange={this.onChangeFotoPost}
            placeholder={"Foto do post do Usuário"} 
            />
          </div>
            <hr />
            <hr />
            <button onClick={this.postarFoto}>Postar Foto</button>
          </FormularioPostagem>
      </ContainerPai>
    );
  }
}

export default App;
