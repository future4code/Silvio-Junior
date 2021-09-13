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

const Erro = styled.p`
    color: red;
    font-size: 12px;
`

class Etapa3 extends React.Component {
    renderizaErro = () => {
        if (this.props.erroCursoComplementar) {
            return(
                <Erro>Erro! Este campo é obrigatório, você deve preenche-lo.</Erro>
            )
        }
    }
    render() {
        return(
            <MainContainer>
                <h3>Informações sobre quem não se formou no ensino superior nem está cursando</h3>
                <CaixaDeInput>
                    <Etiqueta htmlFor="motivo">Por que você não terminou um curso de graduação?</Etiqueta>
                    <input id='motivo' type="text" placeholder='Digite Aqui...'  onChange={this.props.onChangeMotivo}/>
                </CaixaDeInput>
                <CaixaDeInput>
                    {this.renderizaErro()}
                    <Etiqueta htmlFor="Complementar">Você fez algum curso complementar?</Etiqueta>
                    <select id="Complemetar" placeholder='Cursos Complementares' onChange={this.props.onChangeComplementar}>
                        <option value=""></option>
                        <option value="Tecnico">Curso Técnico</option>
                        <option value="Inglês">Cursos de Inglês</option>
                        <option value="Não Fiz">Não fiz curso complementar</option>
                    </ select>
                    <Botao onClick={this.props.onClickEnviar3}>Enviar</Botao>
                </CaixaDeInput>
            </MainContainer>
        )
    }
}

export default Etapa3