import React from 'react'
import styled from 'styled-components'
import Logo from '../img/icone.png'
import GifLoading from '../img/gifLoading.gif'

const MainContainerLoading = styled.div`
    height: 70vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    align-self: center;
`

const CardLoad = styled.div`
    height: 75vh;
    width: 80vw;
    margin-bottom: 10vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
`

const LogoLabex = styled.img`
    height: 30vh;
    margin-top: 10vh;
    width: auto;
    @media(max-width:800px){
        height: 20vh;
        width: auto;
    }
`

const Gif = styled.img`
    margin-top: -65vh;
    height:60vh;
    width: auto;
    @media(max-width:800px){
        height: 35vh;
        width: auto;
    }
`


export function Loading () {
    return (
        <MainContainerLoading>
            <CardLoad>
                <LogoLabex  src={Logo} alt='Logo Labex' />
                <Gif src={GifLoading} alt='Loading...' />
            </CardLoad>
        </MainContainerLoading>
    )
}