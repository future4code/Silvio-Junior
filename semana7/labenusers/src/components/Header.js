import React from 'react'
import styled from 'styled-components'

const MainContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    height: 10vh;
    width: 100vw;
    background-color: blanchedalmond;
    @media (max-width: 768px) {
        align-items: flex-end;
      }
`

const TituloSite = styled.div`
    font-size: 52px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
      }
`

const BotoesPaginas = styled.button`
    background-color: blanchedalmond;
    border: 2px outset black;
    margin-right: 36px;
    margin-top: 36px;

        :hover{
            background-color: ghostwhite;
            cursor: pointer;
        }
        :active {
            background-color: lightcoral;
        }

        @media (max-width: 768px) {
        font-size: 8px;
        margin-right: 2vw;
        margin-bottom: 1vh;
      }
`

class Header extends React.Component {
    render() {
        return (
            <MainContainerHeader>
                <TituloSite>
                    LabenUsers
                </TituloSite>
                <div>
                    <BotoesPaginas onClick={this.props.onClickPaginaAdicionar} >Adicionar Novo Usuário</BotoesPaginas>
                </div>
                <div>
                    <BotoesPaginas onClick={this.props.onClickPaginaLista} >Acessar Lista de Usuários</BotoesPaginas>
                </div>
            </MainContainerHeader>
        )
    }
}

export default Header