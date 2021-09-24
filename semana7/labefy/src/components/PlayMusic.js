import React from "react";
import styled from "styled-components";

const ContainerPlay = styled.div`
    position: fixed;
    top: 90%;
    right: 0;
    left: 0;
    background-color:  #1E392A;
    height: 10vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25vw;

    h2{
        margin: 0;
        padding: 0;
        color: #3CC47C;
        @media(max-width: 800px){
            font-size: 12px;
        }
    }

    h3{
        margin: 0;
        padding: 0;
        color: #3CC47C;
        @media(max-width: 800px){
            font-size: 8px;
        }
    }

    @media(max-width: 800px){
        width: 100vw;
        margin-left: 0vw;
    }
`

const Audio = styled.audio`
    margin-left: 10vw;
`

class PlayMusic extends React.Component {
    render() {
        return(
            <ContainerPlay>
                <div>
                    <h2>{this.props.musicaPlay.name}</h2>
                    <h3>{this.props.musicaPlay.artist}</h3>
                </div>
                <Audio controls autoPlay src={this.props.musicaPlay.url} />
            </ContainerPlay>
        )
    }
}

export default PlayMusic