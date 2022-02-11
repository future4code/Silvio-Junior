import styled from 'styled-components'

export const DeleteButton = styled.button`
    height: 5vw;
    width: 40vw;
    border: none;
    margin-bottom: 2vh;
    margin-right: 0vw;  
    border-radius: 8px;
    background-color: lightpink;
    color: #111111;

    :hover{
        cursor: pointer;
        background-color: #ff2401;
    }

    :active{
        background-color: #e61919;
    }

    @media(max-width: 800px){
        width: 76vw;
        height: 6vh;
        margin-bottom: 4vh;
        margin-top: 4vh;
    }
`