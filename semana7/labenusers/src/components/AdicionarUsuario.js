import React from 'react'
import styled from 'styled-components'

const MainContainerAddUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 4px solid blanchedalmond;
    height: 40vh;
    width: 50vw;
    margin-right: 25vw;
    margin-left: 25vw;
    margin-top: 10vh;
    background-color: ghostwhite;

    @media (max-width: 768px) {
        height: 40vh;
        width: 80vw;
        margin-left: 13vw;
        margin-right: 10vw;

        h1 {
            font-size: 26px;
            margin-bottom: 10vh;
        }
      }
`

const Input = styled.input`
    border-left: none;
    border-top: none;
    margin-left: 12px;
    margin-bottom: 2vh;

    @media (max-width: 768px) {
        margin-left: 4px;
      }
`

const BotoesPaginas = styled.button`
    background-color: ghostwhite;
    border: 2px outset black;
    margin-left: 36px;
    margin-top: 36px;


        :hover{
            background-color: blanchedalmond;
            cursor: pointer;
        }
        :active {
            background-color: lightcoral;
        }

        @media (max-width: 768px) {
        font-size: 12px;
        margin-left: 4vw;

      }
`

const Label = styled.label`
  
    :hover{
      cursor: pointer;
    }
`

class AdicionarUsuario extends React.Component {
    render(){
        return(
            <MainContainerAddUser>
                <h1>Adicionar Novo Usuário</h1>
                <div>
                    <div>
                        <Label htmlFor='nome'>Nome:</Label>
                        <Input id='nome' placeholder="Nome..." value={this.props.inputNome} onChange={this.props.onChangeInputNome} />
                    </div>
                    <div>
                        <Label htmlFor='email'>Email:</Label>
                        <Input id='email' placeholder="E-mail..." value={this.props.inputEmail} onChange={this.props.onChangeInputEmail} />
                        <BotoesPaginas onClick={this.props.createUser} >Enviar</BotoesPaginas>
                    </div>
                </div>
            </MainContainerAddUser>
        )
    }
}

export default AdicionarUsuario