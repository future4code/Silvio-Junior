import React  from "react";
import styled from "styled-components";
import Icone from '../img/icone.png'

const MainContainerFooter = styled.div`
    background-color: black;
    height: 20vh;
    display: flex;
`
const ContainerMarca = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    color: orange;

    h1{
        color: orange;
    }
`

const ContainerEsquerdo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 4vw;
    margin-right: 6vw;
    color: orange;
    width: 40vw;
`

const ContainerDireito = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 6vw;
    margin-left: 4vw;
    color: orange;
    width: 40vw;
`

const IconeLabex = styled.img`
    height: 40px;
    width: auto;
`

function Footer () {
    return(
        <MainContainerFooter>
            <ContainerEsquerdo>
                <ContainerMarca>
                    <IconeLabex src={Icone} alt="Icone LabeX" />
                    <h1>LabeX</h1>
                </ContainerMarca>
                <h3>Empresa fictícia de exploração espacial</h3>
            </ContainerEsquerdo>
            <ContainerDireito>
                <h3>Feito por Silvio Ribeiro Dias Junior</h3>
            </ContainerDireito>
        </MainContainerFooter>
    )
}

export default Footer