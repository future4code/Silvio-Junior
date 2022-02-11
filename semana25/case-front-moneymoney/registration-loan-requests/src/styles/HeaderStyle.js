import styled from "styled-components";

export const MainHeader = styled.div`
    height: 13vh;
    background-color: #111111;
    display: flex;
    justify-content: space-between;
    @media(max-width: 800px){
        flex-direction: column;
        height: 20vh;
        align-items: center;
    }
`

export const Logo = styled.img`
    width: 20vw;
    height: auto;

    @media(max-width: 800px){
        width: 80vw;
        margin-bottom: 0;
    }
`

export const Button = styled.button`
    margin-top: 8vh;
    margin-left: 1vw;
    margin-right: 1vw;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ghostwhite;
    color: ghostwhite;
    :hover{
        background-color: ghostwhite;
        color: #111111;
        cursor: pointer
    }
    :active{
        background-color: lightgray;
        border-bottom: 1px solid lightgray;
        color: #111111;
    }

    @media(max-width: 800px){
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 2vh;
    }
`