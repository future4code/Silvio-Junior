import React, {useState} from 'react';
import { useGetTripDetail } from '../hooks/useGetTripDetail';
import styled from 'styled-components';
import calendario from '../img/icone_calendario.png'
import relogio from '../img/icone_relogio.png'
import planeta from '../img/icone_planeta.png'
import axios from 'axios';

const MainContainerDetail = styled.div`
    min-height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    
    h1{ 
        color: orange;
    }
`

const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
    width: 35vw;
    margin-right: 5vw;
    color: orange;

    h2{
        color: orange;
    }
`

const ContainerCandidatos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 75vh;
    min-width: 35vw;
    margin-left: 5vw;
    color: orange;
    

    p{
        font-size: 12px;
        margin-top: 0;
        padding-top: 0;
    }


    h2{
        color: orange;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`

const ContainerSecundario = styled.div`
    display: flex;
`

const ContainerPlaneta = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-left: 3vw;
    margin-bottom: 2vh;

    img{
        padding-right: 2vw;
    }

`

const ContainerCalendario = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-left: 3vw;
    margin-bottom: 2vh;

    img{
        padding-right: 2vw;
    }

`
const ContainerRelogio = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-left: 3vw;

    img{
        padding-right: 2vw;
    }   

`

const Planeta = styled.img`
    height: 30px;
    width: auto;
`

const Relogio = styled.img`
    height: 30px;
    width: auto;
`

const Calendario = styled.img`
    height: 30px;
    width: auto;
`
const ContainerDescricao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 19vw;

`

const ContainerCandidato = styled.div`
    background-color: black;
    width: 25vw;
    min-height: 25vh;
    margin-bottom: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    :hover{
        box-shadow: 2px 2px 25px lightgray;
        cursor: pointer;
    }
`

const ContainerNome = styled.div`
    padding-bottom: 2vh;
    padding-top: 1vh;
`

const ContainerProfisao = styled.div`
    padding-bottom: 2vh;
`

const ContainerPais = styled.div`
    padding-bottom: 2vh;
`

const ContainerTexto = styled.div`
    padding-bottom: 2vh;
    text-align: center;
`


function TripDetailsPage (props) {
    const trip = useGetTripDetail(props.tripDetailId)
    const candidatos = trip.candidates

    console.log(candidatos)

    const candidatosEmEspera = candidatos.filter((candidato) => {
        return (!candidato.approve)
    })

    const candidatosAprovados = candidatos.filter((candidato) => {
        return(candidato.approve === true)
    })

    console.log(candidatosAprovados)

    const aprovarCandidato = (id) => {
        const headers = {
            headers:{
                'Content-Type': 'application/json',
                auth: window.localStorage.getItem('token')
            }
        }

        const body = {
            "approve": true
        }

        if (window.confirm("Deseja aprovar o candidato?")){
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trips/${props.tripDetailId}/candidates/${id}/decide`, body, headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err.response.data)
            })
        }

    }

    const renderizaCandidatosAprovados = candidatosAprovados.map((candidato) => {
        return(
            <ContainerCandidato>
                <ContainerNome>
                    {candidato.name}, {candidato.age}
                    </ContainerNome>
                <ContainerProfisao>
                    Profissão: {candidato.profession}
                </ContainerProfisao>
                <ContainerPais>
                    País: {candidato.country}
                </ContainerPais>
                <ContainerTexto>
                    {candidato.applicationText}
                </ContainerTexto>
            </ContainerCandidato>
        )
    })


    const renderizaCandidatosEmEspera = candidatosEmEspera.map((candidato) => {
        return(
            <ContainerCandidato onClick={() => aprovarCandidato(candidato.id)}>
                <ContainerNome>
                    {candidato.name}, {candidato.age}
                    </ContainerNome>
                <ContainerProfisao>
                    Profissão: {candidato.profession}
                </ContainerProfisao>
                <ContainerPais>
                    País: {candidato.country}
                </ContainerPais>
                <ContainerTexto>
                    {candidato.applicationText}
                </ContainerTexto>
            </ContainerCandidato>
        )
    })
    
    return(
        <MainContainerDetail>
            <h1>{trip.name}</h1>
            <ContainerSecundario>
                <ContainerDetalhes>
                    <h2>Detalhes</h2>
                    <ContainerDescricao>
                        <b>{trip.description}</b>
                    </ContainerDescricao>
                    <ContainerPlaneta>
                        <Planeta src={planeta} alt="Logo Planeta" />
                        {trip.planet}
                    </ContainerPlaneta>
                    <ContainerCalendario>
                        <Calendario src={calendario} alt="logo calendário" />
                        {trip.date} 
                    </ContainerCalendario>
                    <ContainerRelogio>
                        <Relogio src={relogio} alt="logo relógio" />
                        {trip.durationInDays} dias
                    </ContainerRelogio>
                </ContainerDetalhes>
                <ContainerCandidatos>
                    <h2>Candidatos</h2>
                    <h4>Em Espera</h4>
                    <p><b>Clique no candidato para aprova-lo.</b></p>
                    {candidatosEmEspera && renderizaCandidatosEmEspera}
                    <h4>Aprovados</h4>
                    {candidatosAprovados && renderizaCandidatosAprovados}
                </ContainerCandidatos>
            </ContainerSecundario>
        </MainContainerDetail>
    )
}

export default TripDetailsPage 