import React from 'react';
import styled from 'styled-components';

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between  ;
    padding-left: 3vw;
    padding-right: 3vw;
    background-color: #1E392A;
    height: 10vh;

    h1{
        color: #3CC47C;
        font-size: 40px;
        padding-top: 0vh;
        margin-top: 2vh;
    }

    button{
        height: 4vh;
        padding-top: 0vh;
        margin-top: 5vh;
        background-color: #3CC47C;
        border-color: #3CC47C;

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

class Header extends React.Component {
    render() {
        return(
            <ContainerHeader>
                <h1>Labefy</h1>
                <button onClick={this.props.onClickCriar}>Criar Nova Playlist</button>
            </ContainerHeader>
        )
    }
}

export default Header