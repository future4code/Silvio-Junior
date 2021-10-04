import React from 'react';
import styled from 'styled-components';

const MainContainerCriar = styled.div`
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

    label{
        color: #1E392A;
        margin-right: 2vw;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }

    button{
        /* height: 4vh;
        padding-top: 0vh;
        margin-top: 5vh; */
        background-color:#E9C893;
        border-color: #E9C893;
        margin-left: 2vw;

        :hover{
            cursor: pointer;
            background-color: #1E392A;
            color: #E9C893
        }

        :active{
            background-color: #828081;
        }
    }
`

class CriarPlaylist extends React.Component {
    render(){
        return(
            <MainContainerCriar>
                <h1>Crie uma nova Playlist</h1>
                <label htmlFor="nomePlaylist">Nome da Playlist</label>
                <div>
                    <input id="nomePlaylist" placeholder="Nome..." value={this.props.inputNovaPlaylist} onChange={this.props.onChangeNovaPlaylist} />
                    <button onClick={this.props.createPlaylist}>Enviar</button>
                </div>
            </MainContainerCriar>
        )
    }
}

export default CriarPlaylist