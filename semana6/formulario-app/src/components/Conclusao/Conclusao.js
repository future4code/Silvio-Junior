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


class Conclusao extends React.Component {
    render() {
        return(
            <MainContainer>
                <h3>Formulário Concluído!</h3>
                <p> Obrigado por preencher nosso formulário, {this.props.nomeInput}! Agradecemos a confiança! Entraremos em contato.</p>
            </MainContainer>
        )
    }
}

export default Conclusao