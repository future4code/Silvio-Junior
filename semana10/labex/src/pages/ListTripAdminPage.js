import React, {useState} from 'react';
import axios from 'axios';
import { useGetTrips } from '../hooks/useGetTrips';
import styled from 'styled-components';
import calendario from '../img/icone_calendario.png'
import relogio from '../img/icone_relogio.png'
import planeta from '../img/icone_planeta.png'
import { useHistory } from 'react-router-dom';

const MainContainerTrips = styled.div`
    min-height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    flex-wrap: wrap;
    padding-left: 6vw;
    padding-bottom: 4vh;
    padding-top: 4vh;
    margin-top: 0;
    padding-top: 0;
`

const CardTrip = styled.div`
    background-color: black;
    display: flex;
    height: 54vh;
    width: 25vw;
    flex-direction: column;
    align-items: center;
    color: orange;
    margin: 2vh 2vw;

    :hover{
        box-shadow: 2px 2px 25px lightgray;
        cursor: pointer;
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

const ContainerNome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
`

const ContainerDescricao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 19vw;

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

const ContainerSecundario = styled.div`
    display: flex;
`
const ContainerFiltros =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;

    h3{
        color: orange;
    }

    input {
        background-color: #111111;
        border: none;
        height: 4vh;
        width: 18vw;
        margin-bottom: 2vh;
        border-radius: 12px;
        color: lightgray;
    }

    button{
        background-color: orange;
        border-color: orange;
        height: 4vh;
        width: 18vw;
        border-radius: 12px;

        :hover {
            cursor: pointer;
            background-color: darkorange;
            border-color: darkorange;
        }

        :active {
            cursor: pointer;
            background-color: gold;
            border-color: gold;
        }
    }
`

const ContainerCandidato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    margin-left: 2vw;
    margin-right: 5vw;

    h3{
        color: orange;
    }

    button{
        background-color: orange;
        border-color: orange;
        height: 4vh;
        width: 18vw;
        border-radius: 12px;

        :hover {
            cursor: pointer;
            background-color: darkorange;
            border-color: darkorange;
        }

        :active {
            cursor: pointer;
            background-color: gold;
            border-color: gold;
        }
    }
`

function ListTripAdminPage (props) {
    const trips = useGetTrips()
    const history = useHistory()

    const goToCreateTrip = () => {
        history.push('/create_trip')
    }    

    const goToTripDetails = (id) => {
        props.setTripDetailId(id)
        history.push('/trip_details')
    }

    const renderizaTrip = trips.map((trip) => {
        return (
            <CardTrip onClick={() => goToTripDetails(trip.id)}>
                <ContainerNome>
                    <h2>{trip.name}</h2>
                </ContainerNome>
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
            </CardTrip>
        )
    })
    return(
        <MainContainerTrips>
            <ContainerSecundario>
                <ContainerCandidato>
                    <h3>Tem uma nova viagem? Clique no botão abaixo para cria-la!</h3>
                    <button onClick={goToCreateTrip}>Criar Viagem</button>
                </ContainerCandidato>
               <ContainerFiltros>
                   <h3>Filtrar por</h3>
                   <input placeholder="Nome" />
                   <input placeholder="Planeta" />
                   <div>
                       <input placeholder="Duração Mínima"/>
                       <input placeholder="Duração Máxima"/>
                   </div>
                   <button>Filtrar</button>
               </ContainerFiltros>
            </ContainerSecundario>
            {renderizaTrip}
        </MainContainerTrips>
    )
}

export default ListTripAdminPage