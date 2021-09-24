import React from 'react';
import styled from 'styled-components';
import play from '../img/play.png'

const MainContainerDetalhe = styled.div`
    background-color: #3CC47C;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin: 0;
        padding: 0;
        color: #1E392A;
        @media(max-width: 800px){
            font-size: 20px;
        }
    }

    h3{
        margin: 0;
        padding: 0;
        color: #1E392A;
    }
`

const ContainerAdicionar = styled.div`
    margin-right: 60vw;
    margin-top: 2vh;
    margin-bottom: 4vh;
    border: 1px solid #1E392A;
    padding-bottom: 2vh;
    padding-right: 2vw;
    padding-left: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2vh;

   
    h3{
        color: #1E392A;
    }

    label{
        color: #1E392A;
        margin-right: 2vw;
    }

    button{
        height: 4vh;
        width: 5vw;
        background-color:#E9C893;
        border-color: #E9C893;
        margin-left: 18vw;

        :hover{
            cursor: pointer;
            background-color: #1E392A;
            color: #E9C893
        }

        :active{
            background-color: #828081;
        }

        @media(max-width: 800px){
            width: 20vw;
        }
    }

    @media(max-width: 800px){
        margin-right: 0vw;
        }
`

const ContainerInput = styled.div`
    display: flex;
    margin-top: 1vh;
    margin-bottom: 1vh;
`

const CardMusuca = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2vw;
    margin-left: 2vw;
    width: 200px;
    height: 200px;
    background-color:  #1E392A;

    img{
        height: 100px;
        width: 100px;
        @media(max-width: 800px){
            height: 40px;
            width: 40px;
        }
    }

    div {
        color: #3CC47C;
        font-size: 18px;
        @media(max-width: 800px){
            font-size: 6px;
        }
    }

    :hover {
        width: 250px;
        height: 250px;
        cursor: pointer;
    }

    button{
        height: 3vh;
        width: 4vw;
        background-color:#E9C893;
        border-color: #E9C893;
        margin-left: 10vw;
        margin-bottom: 4vh;

        :hover{
            cursor: pointer;
            background-color: #1E392A;
            color: #E9C893
        }

        :active{
            background-color: #828081;
        }

        @media(max-width: 800px){
            height: 2vh;
            width: 8vw;
            font-size: 8px;
            padding: 0;
            margin-right: 10vw;
            margin-bottom: 1vh;
        }
    }

    @media(max-width: 800px){
        width: 50px;
        height: 100px;
        }
`

const RenderizaCards = styled.div`
    display: flex;
    justify-content: flex-start;
`

class DetalheDaPlaylist extends React.Component {
    render(){
        let musicasDaPlaylist = this.props.musicasPlaylistSelecionada.map((musica) => {
            return(
                <CardMusuca>
                    <button onClick={() => this.props.removeTrackFromPlaylist(musica, this.props.playlistSelecionada)}>Excluir</button>
                    <img onClick={() => this.props.onClickPlay(musica)} src={play}/>
                    <div>{musica.name}</div>
                    <div>{musica.artist}</div>
                </CardMusuca>
            )
        })
        return(
            <MainContainerDetalhe>
                <h1>Suas Músicas de {this.props.playlistSelecionada.name}</h1>
                <ContainerAdicionar>
                    <h3>Adicione uma Nova Música</h3>
                    <ContainerInput>
                        <label htmlFor="nomeMusica">Nome da Música:     </label>
                        <input id="nomeMusica" placeholder="Nome..." value={this.props.inputNovaMusicaNome} onChange={this.props.onChangeNovaMusicaNome} />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="nomeArtista">Nome do Artista:</label>
                        <input id="nomeArtista" placeholder="Artista..." value={this.props.inputNovaMusicaArtista} onChange={this.props.onChangeNovaMusicaArtista} />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="url">URL da Música:</label>
                        <input type="url" id="url" placeholder="Url..." value={this.props.inputNovaMusicaUrl} onChange={this.props.onChangeNovaMusicaUrl} />
                    </ContainerInput>
                    <button onClick={() => this.props.addTrackToPlaylist(this.props.playlistSelecionada)} >Enviar</button>
                </ContainerAdicionar>
                <RenderizaCards>
                {musicasDaPlaylist}
                </RenderizaCards>
            </MainContainerDetalhe>
        )
    }
}

export default DetalheDaPlaylist