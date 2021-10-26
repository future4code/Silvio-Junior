import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from 'styled-components'
import logo from '../img/logo.png'
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import Card from "../components/Card";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom";

const MainContainerHome = styled.div`
    min-height: 80vh;
`

const HeaderHome = styled.header`
    height: 15vh;
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
    justify-content: center;
    align-items: center;
    margin-left: 2vw;
    margin-top: 4vh;

`

const ContainerPubli = styled.div`
    
`

const PubliButton = styled.button`
    height: 4vw;
    width: 24vw;
    border: none;
    border-radius: 8px;
    background-color: #111111;
    color: ghostwhite;
    margin-top: 4vh;

    :hover{
        cursor: pointer;
    }
`

const FiltrosButton = styled.button`
    height: 4vw;
    width: 24vw;
    border: none;
    border-radius: 8px;
    background-color: #111111;
    color: ghostwhite;
    margin-top: 4vh;

    :hover{
        cursor: pointer;
    }
`

const PubliContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
   
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

const InputPubli = styled.input`
    height: 20vw;
    width: 70vw;
    border: none;
    margin-bottom: 2vh;
    border-radius: 8px;
    background-color: #111111;
    color: ghostwhite;
`

const TitlePubli = styled.input`
    height: 5vw;
    width: 70vw;
    border: none;
    margin-bottom: 2vh;
    border-radius: 8px;
    background-color: #111111;
    color: ghostwhite;
`

const ContainerFiltros = styled.div`
`

const ContainerLogout = styled.div`
    button{
        height: 4vh;
        width: 8vw;
        border: none;
        margin-bottom: 2vh;
        border-radius: 8px;
        background-color: #FF4500;
        color: ghostwhite;
        margin-top: 4vh;
        margin-right: 2vw;

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

const MainHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
function HomePage () {
    useProtectedPage()

    const [isPubli, setIsPubli] = useState(false)
    const [publiList, setPubliList] = useState([])
    const [flagVote, setFlagVote] = useState(false)
    const [form, onChange] = useForm({title:'', body:''})
    const history = useHistory()

    
    useEffect(() => {
        const headers = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: window.localStorage.getItem('token')
            }
        }

        axios.get(`${BASE_URL}/posts?page=1&size=10`, headers)
        .then((res) => {
            setPubliList(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            alert("Ocorreu um erro!")
            console.log(err.response)
        })
    }, [flagVote])

    const startPubli = () => {
        setIsPubli(!isPubli)
    }

    const createVote = (id, userVote, like) =>{
        const headers = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: window.localStorage.getItem('token')
            }
        }

        let body = {}

        if (like === true){
            body = {
                direction: 1
            }
        } else {
            body = {
                direction: -1
            }
        }

        if (userVote === null){
            axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((res) => {
                setFlagVote(!flagVote)
            })
            .catch((err) =>{
                alert('Ocorreu um erro!')
            })
        } else if (userVote === -body.direction){
            axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((res) => {
                setFlagVote(!flagVote)
            })
            .catch((err) =>{
                alert('Ocorreu um erro!')
            })
        }
    }

    const deletePostVote = (id) => {
        const headers = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: window.localStorage.getItem('token')
            }
        }

        axios.delete(`${BASE_URL}/posts/${id}/votes`, headers)
        .then((res) => {
            setFlagVote(!flagVote)
        })
        .catch((err) => {
            alert('Ocorreu um erro!')
        })
    }

    const createPost = (event) => {
        event.preventDefault()

        const headers = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: window.localStorage.getItem('token')
            }
        }

        axios.post(`${BASE_URL}/posts`, form, headers)
        .then((res) => {
            alert(res.data)
            event.target.reset()
            setFlagVote(!flagVote)
            setIsPubli(false)
        })
        .catch((err) => {
            alert('Ocorreu um erro!')  
        })

    }

    const renderizaPubli = publiList && publiList.map((publi) => {
        return(
            <Card publi={publi} post={true} createVote={createVote} deletePostVote={deletePostVote}  />
        )
    })

    const logout = () => {
        window.localStorage.removeItem("token")
        history.push('/login')
    }

    return (
        <MainContainerHome>
            <HeaderHome>
                <ContainerMarca>
                    <Logo src={logo} alt='logo reddit' />
                    <h2>Labeddit</h2>
                </ContainerMarca>
                <ContainerPubli>
                    <PubliButton onClick={startPubli} >No que você está pensando? Conte para todos!</PubliButton>
                </ContainerPubli>
                <ContainerFiltros>
                    <FiltrosButton>Quer encontrar alguma publicação específica? Experimente nossos filtros!</FiltrosButton>
                </ContainerFiltros>
                <ContainerLogout>
                    <button onClick={logout} >Logout</button>
                </ContainerLogout>
            </HeaderHome>
            <MainHome>
                {isPubli && 
                    (
                        <PubliContainer onSubmit={createPost}>
                            <TitlePubli onChange={onChange} value={form.title} name='title'  placeholder='Escreva um título para sua publicação!' required />
                            <InputPubli onChange={onChange} value={form.body} name='body' placeholder='No que você está pensando?' required />
                            <button>Publicar</button>
                        </PubliContainer>
                    )}
                {renderizaPubli}
            </MainHome>
        </MainContainerHome>
    )
}

export default HomePage