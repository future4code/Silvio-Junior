import React from 'react';
import styled from 'styled-components';
import Icone from '../img/icone.png'


const MainContainerLogin = styled.div`
    height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardLogin = styled.div`
    height: 75vh;
    width: 30vw;
    margin-bottom: 10vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const ContainerMarca = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    margin-top: 4vh;

    h1{
        color: orange;
        font-size: 50px;
    }
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        background-color: #111111;
        border: none;
        height: 6vh;
        width: 18vw;
        margin-bottom: 6vh;
        border-radius: 12px;
    }

    button{
        background-color: orange;
        border-color: orange;
        height: 6vh;
        width: 18vw;
        margin-bottom: 4vh;
        border-radius: 12px;

        :hover {
            cursor: pointer;
            background-color: darkorange;
            border-color: darkorange;
        }

        :active {
            cursor: pointer;
            background-color: gold;
            border-color: gold;
        }
    }
`

const Mensagem = styled.div`
    width: 18vw;
    p{
        color: orange;
        font-size: 12px;
    }
`

const IconeLabex = styled.img`
    height: 70px;
    width: auto;
`

function LoginPage () {
    return(
        <MainContainerLogin>
            <CardLogin>
                <ContainerMarca>
                    <IconeLabex src={Icone} alt="Icone LabeX" />
                    <h1>LabeX</h1>
                </ContainerMarca>
                <Mensagem>
                    <p>Insira seu e-mail e a senha cadastrada para acessar a área dos administradores.</p>
                </Mensagem>
                <ContainerInput>
                    <input placeholder="E-mail" />
                    <input placeholder="Senha" />
                    <button>Entrar</button>
                </ContainerInput>
            </CardLogin>
        </MainContainerLogin>
    )
}

export default LoginPage