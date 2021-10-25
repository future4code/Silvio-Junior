import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const MainCard = styled.div`
    min-height: 40vh;
    width: 70vw;
    background-color: black;
    margin-top: 4vh;
    padding: 2vw 2vh;

    :hover{
        cursor: pointer;
        box-shadow: 2px 2px 25px lightgray;
    }
`

const ContainerNome = styled.div`
    height: 4vh;
`

const ContainerPubli = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 30vh;
`

const ContainerInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerVote = styled.div`
    width: 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerComentario = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 8vw;
`

function Card (props) {
    const history = useHistory()
    const {selectedPost, setSelectedPost} = useContext(GlobalContext)

    const goToPostPage = () => {
        setSelectedPost(props.publi)
        history.push(`/post/${props.publi.id}`)
    }

    return (
        <MainCard>
            <ContainerNome>
                {props.publi.username}
            </ContainerNome>
            <ContainerPubli onClick={goToPostPage} > 
                <h2>{props.publi.title}</h2>
                <p>{props.publi.body}</p>
            </ContainerPubli>
            <ContainerInfos>
                <ContainerVote>
                    <button>Like</button>
                    {props.publi.voteSum === null ? (0) : (props.publi.voteSum)}
                    <button>Dislike</button>
                </ContainerVote>
                {(props.post) &&
                (<ContainerComentario>
                    {props.publi.commentCount === null ? (0) : (props.publi.commentCount)} {props.publi.commentCount > 1 ? (<p>Comentários</p>) : (<p>Comentário</p>)}
                </ContainerComentario>)}
            </ContainerInfos>
        </MainCard>
    )
}

export default Card