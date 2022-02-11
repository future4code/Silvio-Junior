import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: space-around;
    width: 90vw;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input`
    height: 5vw;
    width: 25vw;
    border: none;
    margin-bottom: 2vh;
    margin-right: 2vw;
    border-radius: 8px;
    background-color: lightgray;
    color: #111111;

    @media(max-width: 800px){
        height: 6vh;
        width: 75vw;
    }
`

export const LeftContainer = styled.div`
    width: 30vw;
    height: 84vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        text-align: center;
    }

    @media(max-width: 800px){
        width: 80vw;
        height: auto;
    }
`

export const RightContainer = styled.div`
    width: 30vw;
    height: 84vh;

    h3{
        text-align: center;
    }
    @media(max-width: 800px){
        width: 80vw;
        height: auto;
    }
`

export const ContainerFlexInputs = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25vw;
    @media(max-width: 800px){
        width: 75vw;
    }

    input {
        height: 5vw;
        width: 10vw;
        border: none;
        margin-bottom: 2vh;
        margin-right: 0vw;  
        border-radius: 8px;
        background-color: lightgray;
        color: #111111;

        @media(max-width: 800px){
            height: 6vh;
            width: 35vw;
        }
    }
`

export const Button = styled.button`
    height: 5vw;
    width: 25vw;
    border: none;
    margin-bottom: 2vh;
    margin-right: 0vw;  
    border-radius: 8px;
    background-color: lightblue;
    color: #111111;

    :hover{
        cursor: pointer;
        background-color: #4682B4;
    }

    :active{
        background-color: #3b5998;
    }

    @media(max-width: 800px){
        width: 76vw;
        height: 6vh;
        margin-bottom: 4vh;
        margin-top: 4vh;
    }
`

export const MainRegistration = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        text-align: center;
        @media(max-width: 800px){
            font-size: 20px;
        }
    }
`

export const ErrorMessage = styled.p `
    color: red;
    width: 25vw;
    text-align: center;

    @media(max-width: 800px){
        width: 76vw;
       
    }
`