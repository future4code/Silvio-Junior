import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { useParams, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import Card from '../components/Card'
import styled from 'styled-components'
import logo from '../img/logo.png'
import { useForm } from '../hooks/useForm'
import { animateScroll } from 'react-scroll'

const MainContainerPost = styled.div`
    min-height: 100vh;
    margin-bottom: 4vh;
`

const ContainerComentarios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeaderPost = styled.header`
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

const ContainerVoltaHome = styled.div`
    
`

const VoltaHomeButton = styled.button`
    height: 6vh;
    width: 12vw;
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

const ComentContainer = styled.form`
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

const InputComent = styled.input`
    height: 20vw;
    width: 70vw;
    border: none;
    margin-bottom: 2vh;
    border-radius: 8px;
    background-color: #111111;
    color: ghostwhite;
`

const ContainerDosFiltros = styled.div`
    display: flex;
    width: 26vw;
    justify-content: space-between;
    align-items: center;
    margin-top: 4vh;

    button{
        height: 4vh;
        width: 8vw;
        border: none;
        margin-bottom: 2vh;
        border-radius: 8px;
        background-color: #FF4500;
        color: ghostwhite;
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

    input {
        height: 5vw;
        width: 15vw;
        border: none;
        margin-bottom: 2vh;
        border-radius: 8px;
        background-color: #111111;
        color: ghostwhite;
    }
`

const ButtonComment = styled.div`
    display: flex;
    width: 18vw;
    justify-content: space-between;
    align-items: center;

    button{
        height: 4vh;
        width: 8vw;
        border: none;
        margin-bottom: 2vh;
        border-radius: 8px;
        background-color: #FF4500;
        color: ghostwhite;
        margin-top: 2vh;
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

    input {
        height: 5vw;
        width: 15vw;
        border: none;
        margin-bottom: 2vh;
        border-radius: 8px;
        background-color: #111111;
        color: ghostwhite;
    }


`


function PostPage () {
    const params = useParams()
    const {selectedPost} = useContext(GlobalContext)
    const [comentarios, setComentarios] = useState([])
    const history = useHistory()
    const [flagVote, setFlagVote] = useState(false)
    const [form, onChange] = useForm({body:''})
    const [isFilter, setIsFilter] = useState(false)
    const [formFilters, onChangeFormFilters] = useForm({body: ''})

    useEffect(() => {
        const headers = {
            headers:{
                Authorization: window.localStorage.getItem('token')
            }
        }

        axios.get(`${BASE_URL}/posts/${params.id}/comments`, headers)
        .then((res) => {
            setComentarios(res.data)
        })
        .catch((err) => {
            alert('Ocorreu um erro')
            console.log(err.response.request.statusText)
        })
    }, [flagVote])

    const logout = () => {
        window.localStorage.removeItem("token")
        history.push('/login')
    }

    const goToHome = () => {
        history.push('/')
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

    const createCommentVote = (id, userVote, like) =>{
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
            axios.post(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((res) => {
                setFlagVote(!flagVote)
            })
            .catch((err) =>{
                alert('Ocorreu um erro!')
            })
        } else if (userVote === -body.direction){
            axios.put(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then((res) => {
                setFlagVote(!flagVote)
            })
            .catch((err) =>{
                alert('Ocorreu um erro!')
            })
        }
    }

    const deleteCommentVote = (id) => {
        const headers = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: window.localStorage.getItem('token')
            }
        }

        axios.delete(`${BASE_URL}/comments/${id}/votes`, headers)
        .then((res) => {
            setFlagVote(!flagVote)
        })
        .catch((err) => {
            alert('Ocorreu um erro!')
        })
    }

    const createComment = (event) => {
        event.preventDefault()

        const headers = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: window.localStorage.getItem('token')
            }
        }

        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, headers)
        .then((res) => {
            alert(res.data)
            form.body = ''
            setFlagVote(!flagVote)
        })
        .catch((err) => {
            alert('Ocorreu um erro1')
        })


    }


    const renderizaComentarios = comentarios && comentarios.map((comentario) => {
        return(
            <Card publi={comentario} post={false} createVote={createCommentVote} deletePostVote={deleteCommentVote} />
        )
    })

    const startFilter = () => {
        setIsFilter(!isFilter)
    }

    const filtrarComment = (event) => {
        event.preventDefault()

        setIsFilter(false)

        let elementosFiltrados = []

        const arrayBusca = formFilters.body.toUpperCase().split(' ')
        comentarios.map((publi) => {
            let arrayTitulo = publi.body.split(' ')
            arrayTitulo.filter((palavra) => {
                console.log(arrayTitulo)
                if (arrayBusca.indexOf(palavra.toUpperCase()) !== -1){
                    elementosFiltrados.push(publi)
                }
            })
        })

        setComentarios(elementosFiltrados)
    }

    const goToComentar = () => {
        animateScroll.scrollToBottom()
    }

    return(
        <MainContainerPost>
            <HeaderPost>
                <ContainerMarca>
                    <Logo src={logo} alt='logo reddit' />
                    <h2>Labeddit</h2>
                </ContainerMarca>
                <ContainerVoltaHome>
                    <VoltaHomeButton onClick={goToHome} >Voltar Para Home</VoltaHomeButton>
                </ContainerVoltaHome>
                <ContainerFiltros>
                    <FiltrosButton  onClick={startFilter}>Quer encontrar algum Comentário específica? Experimente nossos filtros!</FiltrosButton>
                </ContainerFiltros>
                <ContainerLogout>
                    <button onClick={logout} >Logout</button>
                </ContainerLogout>
            </HeaderPost>
            <ContainerComentarios>
                {isFilter &&
                    (
                        <form onSubmit={filtrarComment}>
                            <ContainerDosFiltros>
                                <input onChange={onChangeFormFilters} value={formFilters.body} name='body' placeholder='Palavras-Chave' required />
                                <button>Buscar</button>
                            </ContainerDosFiltros>
                        </form>
                )}
                <Card publi={selectedPost} post={true} createVote={createVote} deletePostVote={deletePostVote}  />
                <ButtonComment>
                    <h4>Algo a dizer?</h4>
                    <button onClick={goToComentar} >Comentar</button>
                </ButtonComment>
                {comentarios.length > 0 ?
                (renderizaComentarios)
                :
                (<div>
                    <h2>Ops... Não há nenhum comentário nesta publicação.</h2>
                    <h5>Seja o primeiro a comentar ou revise seus filtros para visualizar possíveis comentários.</h5>
                </div>)}
                <ComentContainer onSubmit={createComment}>
                    <InputComent onChange={onChange} value={form.body} name='body' placeholder='O que você achou disso?' required />
                    <button>Publicar</button>
                </ComentContainer>
            </ContainerComentarios>
        </MainContainerPost>
    )
}

export default PostPage