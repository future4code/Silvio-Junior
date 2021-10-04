import React from 'react';
import styled from 'styled-components';

const ContainerBotoesInput = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
`
const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`
const ContainerBotoes = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`

const BotoesPaginas = styled.button`
    background-color: blanchedalmond;
    border: 2px outset black;
    margin-left: 20px;
    margin-bottom: 8px;
    height: 4vh;
    width: 8vw;

        :hover{
            background-color: ghostwhite;
            cursor: pointer;
        }
        :active {
            background-color: lightcoral;
        }

        @media (max-width: 768px) {
            height: 6vh;
            width: 25vw;
            margin-left: 0;
            margin-right: 2vw;
            margin-top: 4px;
      }
`

const MainContainerUsuario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 4px solid blanchedalmond;
  height: 70vh;
  width: 30vw;
  margin-right: 35vw;
  margin-left: 35vw;  
  margin-top: 4vh;
  background-color: ghostwhite;
  padding-left: 2vw;

  :hover{
    cursor: pointer;
  }

  @media (max-width: 768px) {
        width: 80vw;
        margin-right: 10vw;
        margin-left: 13vw;
      }
`

const ContainerInfo = styled.div`
    margin-bottom: 4vh;
    margin-top: 0;
    
`

const InfoUser = styled.p`
    font-size: 24px;
`

const Input = styled.input`
    border-left: none;
    border-top: none;
    margin-left: 12px;
    margin-bottom: 2vh;
`

class PaginaDoUsuario extends React.Component {
    
    render(){
        return(
            <div>
                {this.props.edicaoUser ? 
                (<MainContainerUsuario>
                    <h1>Página do Usuário</h1>
                    <ContainerBotoesInput>
                        <ContainerInput>
                            <div>
                                <label htmlFor='nome'>Nome:</label>
                                <Input name='nome' placeholder="Nome..." value={this.props.inputNome} onChange={this.props.onChangeInputNome} />
                            </div>
                            <div>
                                <label htmlFor='email'>Email:</label>
                                <Input name='email' placeholder="E-mail..." value={this.props.inputEmail} onChange={this.props.onChangeInputEmail} />
                            </div>
                        </ContainerInput>
                        <ContainerBotoes>
                            <BotoesPaginas onClick={() => this.props.deleteUser(this.props.usuarioPagina.id)}>Deletar Usuário</BotoesPaginas>
                            <BotoesPaginas onClick={() => this.props.editUser(this.props.usuarioPagina)} >Enviar</BotoesPaginas>
                        </ContainerBotoes>
                    </ContainerBotoesInput>
                    <ContainerInfo>
                        <h3>Usuário</h3>
                        <InfoUser>{this.props.usuarioPagina.name}</InfoUser>
                    </ContainerInfo>
                    <ContainerInfo>
                        <h3>E-mail</h3>
                        <InfoUser>{this.props.usuarioPagina.email}</InfoUser>
                    </ContainerInfo>
                </MainContainerUsuario>)
                : 
                (<MainContainerUsuario>
                    <h1>Página do Usuário</h1>
                    <ContainerBotoesInput>
                        <BotoesPaginas onClick={this.props.editarUser}>Editar Usuário</BotoesPaginas>
                        <BotoesPaginas onClick={() => this.props.deleteUser(this.props.usuarioPagina.id)}>Deletar Usuário</BotoesPaginas>
                    </ContainerBotoesInput>
                    <ContainerInfo>
                        <h3>Usuário</h3>
                        <InfoUser>{this.props.usuarioPagina.name}</InfoUser>
                    </ContainerInfo>
                    <ContainerInfo>
                        <h3>E-mail</h3>
                        <InfoUser>{this.props.usuarioPagina.email}</InfoUser>
                    </ContainerInfo>
                </MainContainerUsuario>)}
            </div>
            
        )
    }
}

export default PaginaDoUsuario