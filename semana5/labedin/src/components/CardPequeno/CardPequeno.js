import React from 'react';
import styled from 'styled-components'

const ContainerCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

`

const Descricao = styled.p `
    margin-left: 50px;
`

const Titulo = styled.h3 `
    margin-left: 20px;
`

const ImagemBotao = styled.img `
    width: 30px;
    margin-right: 10px;
`

const CardPequeno = (props) => {
    return (
        <ContainerCard>
            <ImagemBotao src={props.imagem} />
            <Titulo>{props.titulo}</Titulo>
            <Descricao>{props.descricao}</Descricao>

        </ContainerCard>
    )
}

export default CardPequeno