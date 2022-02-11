import styled from "styled-components";

export const MainHome = styled.div`
    display: flex;
    justify-content: space-around;
    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`

export const MainImg = styled.div`
    margin-top: 4vh;
    img {
        @media(max-width: 800px){
            width: 80vw;
            height: auto;
        }
    }
`

export const MainTexto = styled.div`
    width: 35vw;
    height: 60vh;
    margin-top: 8vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-right: 2vw;
    padding-left: 2vw;
    border: 1px solid ghostwhite;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h2{
        text-align: center;
    }

    p{
        text-align: center;
    }

    button{
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
    }

    @media(max-width: 800px){
        width: 80vw;
        margin-bottom: 4vh;
    }
`