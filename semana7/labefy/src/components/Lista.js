import React from "react";
import styled from "styled-components";

const MainContainerLista = styled.div`
    background-color: #3CC47C;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin: 0;
        padding: 0;
        color: #1E392A;
    }
`

const ContainerPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2vw;
    padding-left: 2vw;
    width: 60vw;
    margin-right: 15vw;
    margin-left: 15vw;
    margin-bottom: 1vh;
    background-color: #1E392A;
    height: 5vh;
    color: #E9C893;

    button{
        /* height: 4vh;
        padding-top: 0vh;
        margin-top: 5vh; */
        background-color:#E9C893;
        border-color: #E9C893;

        :hover{
            cursor: pointer;
            background-color: #1E392A;
            color: #E9C893
        }

        :active{
            background-color: #828081;
        }
    }

    :hover{
        cursor: pointer;
        width: 70vw;

    }
`

const ContainerDeBusca = styled.div`
    margin-right: 60vw;
    margin-top: 2vh;
    margin-bottom: 4vh;
    border: 1px solid #1E392A;
    padding-bottom: 2vh;
    padding-right: 2vw;
    padding-left: 2vw;
   
    h3{
        color: #1E392A;
    }

    label{
        color: #1E392A;
        margin-right: 2vw;
    }

    button{
        /* height: 4vh;
        padding-top: 0vh;
        margin-top: 5vh; */
        background-color:#E9C893;
        border-color: #E9C893;

        :hover{
            cursor: pointer;
            background-color: #1E392A;
            color: #E9C893
        }

        :active{
            background-color: #828081;
        }
    }
    
    @media(max-width: 800px) {
        margin-right: 2vw;
        margin-left: 2vw;
    }
`

class Lista extends React.Component {
    render() {
        let playlistsAtivas = this.props.playlists.map((playlist) => {
            return (
                <ContainerPlaylist onClick={() => this.props.onClickDetalhe(playlist)}>
                    {playlist.name}
                    <button onClick={() => this.props.onClickExcluir(playlist)}>Excluir</button>
                </ContainerPlaylist>
            )
        })
        return(
            <MainContainerLista>
                <h1>Suas Playlists</h1>
                <ContainerDeBusca>
                    <h3>Buscar Playlist</h3>
                    <label htmlFor="nome">Nome da Playlist:</label>
                    <input id="nome" placeholder="Nome..." />
                    <button>Enviar</button>
                </ContainerDeBusca>
                {playlistsAtivas}
            </MainContainerLista>
        )
    }
}

export default Lista    