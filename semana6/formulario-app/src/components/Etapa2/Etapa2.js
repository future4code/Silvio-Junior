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

class Etapa2 extends React.Component {
    render() {
        return(
            <MainContainer>
                <h3>Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h3>
                <CaixaDeInput>
                    <Etiqueta htmlFor="curso">Qual o Curso?</Etiqueta>
                    <input id='curso' type="text" placeholder='Curso Superior'  onChange={this.props.onChangeCurso}/>
                </CaixaDeInput>
                <CaixaDeInput>
                    <Etiqueta htmlFor="instituicao">Qual a unidade de ensino?</Etiqueta>
                    <input id="instituicao" type="text" placeholder='Instituição de ensino'  onChange={this.props.onChangeInstituicao}/>
                    <Botao onClick={this.props.onClickEnviar2}>Enviar</Botao>
                </CaixaDeInput>
            </MainContainer>
        )
    }
}

export default Etapa2