import React from "react";
import logo from '../img/logo.png'
import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const MainContainerLogin = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardLogin = styled.div`
    height: 70vh;
    width: 30vw;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh 2vw;
    margin-top: 12vh;
`

const Logo = styled.img`
    height: 80px;
    width: auto;
`

const ContainerMarca = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8vh;
`

const ContainerInputs = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        height: 4vw;
        width: 20vw;
        border: none;
        margin-bottom: 2vh;
        border-radius: 8px;
        background-color: #111111;
        color: ghostwhite;
    }

    button{
        height: 4vw;
        width: 20vw;
        border: none;
        margin-bottom: 2vh;
        border-radius: 8px;
        background-color: #FF4500;
        color: ghostwhite;

        :hover {
            cursor: pointer;
            background-color: #FF4544;
        }

        :active {
            cursor: pointer;
            background-color: #FF5544;
        }
    }
`

const ContainerCadastro = styled.div`
    u{
        color: #FF4500;
        cursor: pointer;

        :hover {
            cursor: pointer;
            color: #FF4544;
        }

        :active {
            cursor: pointer;
            color: #FF5544;
        }
    }
`
function LoginPage () {
    const history = useHistory()
    const [form, onChange] = useForm({email: '', password:''})

    const handleClick = (event) => {
        event.preventDefault()

        const headers = {
            headers:{
                'Content-Type': 'application/json',
            }
        }

        axios.post(`${BASE_URL}/users/login`, form, headers)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token)
            history.push('/')
        })
        .catch((err) => {
            console.log(err.response)
            alert("Ocorreu um erro.")
        })
    }

    const goToSignUp = () => {
        history.push('/signup')
    }
    return (
        <MainContainerLogin>
            <CardLogin>
                <ContainerMarca>
                    <Logo src={logo} alt='logo reddit' />
                    <h1>Labeddit</h1>
                </ContainerMarca>
                <ContainerInputs onSubmit={handleClick}>
                    <input onChange={onChange} value={form.email} name='email' type='email' placeholder='E-mail' required />
                    <input onChange={onChange} value={form.password} name='password' type='password' placeholder='Senha' required />
                    <button>Entrar</button>
                </ContainerInputs>
                <ContainerCadastro>
                    <h4>Ainda não tem uma conta? <u onClick={goToSignUp} >Cadastre-se.</u></h4>
                </ContainerCadastro>
            </CardLogin>
        </MainContainerLogin>
    )
}

export default LoginPage