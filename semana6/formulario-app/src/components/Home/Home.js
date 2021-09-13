import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 60vh;
    width: 60vw;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    margin-left: 20vw;
`

const CaixaDeInput = styled.div `
    margin-bottom: 12px;
`

const Etiqueta = styled.label`
    margin-right: 8px;
`

const Botao = styled.button`
    margin-left: 8px;
`
class Home extends React.Component {
    render(){
        return(
            <MainContainer>
                <h1>Dados Gerais</h1>
                <CaixaDeInput>
                    <Etiqueta htmlFor="nome">Nome:</Etiqueta>
                    <input id='nome' type="text" placeholder='Nome'  onChange={this.props.onChangeNome}/>
                </CaixaDeInput>
                <CaixaDeInput>
                    <Etiqueta htmlFor="idade">Idade:</Etiqueta>
                    <input id="idade" type="number" min='0' placeholder='Idade'  onChange={this.props.onChangeIdade}/>
                </CaixaDeInput>
                <CaixaDeInput>
                    <Etiqueta htmlFor="emali">E-mail:</Etiqueta>
                    <input id="email" type="email" placeholder='E-mail' onChange={this.props.onChangeEmail}/>
                </CaixaDeInput>
                <CaixaDeInput>
                    <Etiqueta htmlFor="grau">Grau de Escolaridade:</Etiqueta>
                    <select id="grau" placeholder='Grau de Escolaridade' onChange={this.props.onChangeGrauDeEscolaridade}>
                        <option value=""></option>
                        <option value="Medio">Ensino Médio Incompleto</option>
                        <option value="Medio">Ensino Médio Completo</option>
                        <option value="Superior">Ensino Superior Incompleto</option>
                        <option value="Superior">Ensino Superior Completo</option>
                    </ select>
                    <Botao onClick={this.props.onClickEnviar1}>Enviar</Botao>
                </CaixaDeInput>
            </MainContainer>
        )
    }
}

export default Home