import React, {useState} from 'react';
import styled from 'styled-components';
import Icone from '../img/icone.png'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


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
        color: lightgray;
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
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconeLabex = styled.img`
    height: 70px;
    width: auto;
`

function LoginPage () {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const onChangeLogin = (event) => {
        setLogin(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const history = useHistory()

    const onClickEnviar = () => {

        const body = {
            email: login,
            password: password
          };
      
          axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/login",
              body
            )
            .then((response) => {
                window.localStorage.setItem("token", response.data.token);
                history.push("/admin");
            })
            .catch((error) => {
                setError(error.response.data.message)
            });
    }

    return(
        <MainContainerLogin>
            <CardLogin>
                <ContainerMarca>
                    <IconeLabex src={Icone} alt="Icone LabeX" />
                    <h1>LabeX</h1>
                </ContainerMarca>
                <Mensagem>
                    {error === "" ?
                    (<p>Insira seu e-mail e a senha cadastrada para acessar a área dos administradores.</p>)
                    :
                    (<p>{error}</p>)}
                </Mensagem>
                <ContainerInput>
                    <input value={login} onChange={onChangeLogin} type="email" placeholder="E-mail" />
                    <input value={password} onChange={onChangePassword} type='password' placeholder="Senha" />
                    <button onClick={onClickEnviar}>Entrar</button>
                </ContainerInput>
            </CardLogin>
        </MainContainerLogin>
    )
}

export default LoginPage