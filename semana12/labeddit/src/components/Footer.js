import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'

const MainFooter = styled.div`
    height: 20vh;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    height: 50px;
    width: auto;
`

const ContainerMarca = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2vw;
    margin-top: 4vh;

`

const ContainerLegenda = styled.div`
    margin-left: 2vw;
    margin-top: 0;

    h5{
        margin-top: 0;
    }
`

const ContainerDescicao = styled.div`
    margin-right: 2vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h2{
        margin-bottom: 0;
    }

    h5 {
        margin-bottom: 0;
        margin-top: 0;
    }
`

function Footer () {
    return(
        <MainFooter>
            <div>
                <ContainerMarca>
                    <Logo src={logo} alt='logo reddit' />
                    <h2>Labeddit</h2>
                </ContainerMarca>
                <ContainerLegenda>
                    <h5>Rede social fictícia desenvolvida como atividade para o curso de desenvolvimento web da Labenu.</h5>
                </ContainerLegenda>
            </div>
            <ContainerDescicao>
                <h2>Desenvolvido por Silvio Dias Jr.</h2>
                <h5>Acompanhe minhas redes sociais:</h5>

            </ContainerDescicao>
        </MainFooter>

    )
}

export default Footer