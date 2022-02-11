import styled from "styled-components";

export const MainCard = styled.div `
    display: flex;
    justify-content: space-around;
    width: 45vw;
    min-height: 40vh;
    background-color: lightgray;
    margin-bottom: 2vh;
    margin-top: 2vh;
    margin-right: 1vw;
    margin-left: 2vw;
    border-radius: 6px;

    :hover{
        background-color: gray;
        cursor: pointer;
    }

    @media(max-width: 800px){
        width: 90vw;
        padding: 0;
    }
`

export const ContainerInfo = styled.div `
    display: flex;
    flex-direction: column;
    width: 10vw;
    margin: 0;
    padding: 0;

    @media(max-width: 800px){
        width: 24vw;
    }

    h3 {
        font-size: 18px;
        color: #111111;

        @media(max-width: 800px){
            font-size: 12px;
        }
    }

    p{
        font-size: 14px;
        margin: 0;
        padding: 0;
        margin-bottom: 8px;
        color: #111111;

        @media(max-width: 800px){
            font-size: 10px;
        }
    }
`

export const MainRequests = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ContainerCabecalho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
    }

    h4{
        text-align: center;
    }
`