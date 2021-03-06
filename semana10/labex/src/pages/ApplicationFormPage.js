import React from 'react';
import styled from 'styled-components';
import Icone from '../img/icone.png'
import { useGetTrips } from '../hooks/useGetTrips';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { Loading } from '../components/Loading';

const MainContainerForm = styled.div`
    height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    @media(max-width:800px){
            height: 180vh;
    }
`

const CardForm = styled.div`
    background-color: black;
    height: 78vh;
    width: 60vw;
    padding-top: 0;

    @media(max-width:800px){
        width: 80vw;
        height: 150vh;
    }

`

const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 4vh;

    input {
        background-color: #111111;
        border: none;
        height: 6vh;
        width: 18vw;
        margin-bottom: 3vh;
        border-radius: 12px;
        color: lightgray;
        @media(max-width:800px){
            width: 40vw;
        }

    }

    select{
        background-color: #111111;
        border: none;
        height: 6vh;
        width: 18vw;
        margin-bottom: 3vh;
        border-radius: 12px;
        color: lightgray;
        @media(max-width:800px){
            width: 40vw;
        }
    }

    button{
        background-color: orange;
        border-color: orange;
        height: 6vh;
        width: 18vw;
        margin-bottom: 4vh;
        border-radius: 12px;
        @media(max-width:800px){
            width: 40vw;
        }

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
const DivSecundaria = styled.form`
    display: flex;
    @media(max-width:800px){
        flex-direction: column;
    }
`
const DivMensagemEnvar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    margin-left: 4vw;
    @media(max-width:800px){
        margin-left: 2vw;
    }

    h4{
        color: orange;
    }
    input {
        background-color: #111111;
        border: none;
        height: 26vh;
        width: 24vw;
        margin-bottom: 6vh;
        border-radius: 12px;
        color: lightgray;
        @media(max-width:800px){
            width: 40vw;
        }
    }

    button{
        background-color: orange;
        border-color: orange;
        height: 6vh;
        width: 18vw;
        margin-bottom: 4vh;
        border-radius: 12px;
        @media(max-width:800px){
            width: 40vw;
        }

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

const ContainerMarca = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    margin-top: 4vh;

    h1{
        color: orange;
        font-size: 50px;
    }
`

const IconeLabex = styled.img`
    height: 70px;
    width: auto;
`

const Mensagem = styled.div`
    color: orange;
    justify-content: center;
    text-align: center;
`

function ApplicationFormPage () {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [applicationText, setApplicationText] = useState('')
    const [profession, setProfession] = useState('')
    const [country, setCountry] = useState('')
    const [tripId, setTripId] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeAge = (event) =>{
        setAge(event.target.value)
    }

    const onChangeProfession = (event) => {
        setProfession(event.target.value)
    }

    const onChangeCountry = (event) => {
        setCountry(event.target.value)
    }

    const onChangeTripId = (event) => {
        setTripId(event.target.value)
    }

    const onChangeText = (event) => {
        setApplicationText(event.target.value)
    }

    const onClickCadidatar = (event) => {

        event.preventDefault()

        const headers = {
            headers:{

                'Content-Type': 'application/json',
            }
        }

        const body = {   
            "name": name,
            "age": age,
            "applicationText": applicationText,
            "profession": profession,
            "country": country
        }

        setLoading(true)

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trips/${tripId}/apply`, body, headers)
        .then((res) => {
            setMessage(res.data.message)
            setLoading(false)
        })
        .catch(err => {
            setMessage(err.response.data.message)
            setLoading(false)
        })

    }
    const constante = ''

    const [trips, loadingTrips] = useGetTrips(constante)

    const options = trips.map((trip) => {
        return(
            <option id={trip.id} value={trip.id}>{trip.name}</option>
        )
    })
    return(
        <MainContainerForm>
            <CardForm>
                <ContainerMarca>
                    <IconeLabex src={Icone} alt="Icone LabeX" />
                    <h1>LabeX</h1>
                </ContainerMarca>
                {((loading == true) || (loadingTrips === true))?
                (<Loading />)
                :
                (
                <div>
                    < Mensagem>
                        <p><b>Informe seus dados para se candidatar ?? viagem:</b></p>
                        {message !== "" && <p>{message}</p>}
                    </ Mensagem>
                    <DivSecundaria onSubmit={onClickCadidatar}>
                        <DivInfos>
                            <input value={name} onChange={onChangeName} placeholder="Nome" required />
                            <input value={age} onChange={onChangeAge} type='number' min='18' placeholder="Idade" required />
                            <input value={profession} onChange={onChangeProfession} placeholder="Profiss??o" required />
                            <select value={country} onChange={onChangeCountry} required>
                                <option value="" disabled selected>Pa??s</option>
                                <option value="??frica do Sul">??frica do Sul</option>
                                <option value="Alb??nia">Alb??nia</option>
                                <option value="Alemanha">Alemanha</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antigua">Antigua</option>
                                <option value="Ar??bia Saudita">Ar??bia Saudita</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Arm??nia">Arm??nia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Austr??lia">Austr??lia</option>
                                <option value="??ustria">??ustria</option>
                                <option value="Azerbaij??o">Azerbaij??o</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrein">Bahrein</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="B??lgica">B??lgica</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermudas">Bermudas</option>
                                <option value="Botsuana">Botsuana</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulg??ria">Bulg??ria</option>
                                <option value="Burkina Fasso">Burkina Fasso</option>
                                <option value="But??o">But??o</option>
                                <option value="Cabo Verde">Cabo Verde</option>
                                <option value="Camar??es">Camar??es</option>
                                <option value="Camboja">Camboja</option>
                                <option value="Canad??">Canad??</option>
                                <option value="Cazaquist??o">Cazaquist??o</option>
                                <option value="Chade">Chade</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Cidade do Vaticano">Cidade do Vaticano</option>
                                <option value="Col??mbia">Col??mbia</option>
                                <option value="Congo">Congo</option>
                                <option value="Cor??ia do Sul">Cor??ia do Sul</option>
                                <option value="Costa do Marfim">Costa do Marfim</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cro??cia">Cro??cia</option>
                                <option value="Dinamarca">Dinamarca</option>
                                <option value="Djibuti">Djibuti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="EUA">EUA</option>
                                <option value="Egito">Egito</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Emirados ??rabes">Emirados ??rabes</option>
                                <option value="Equador">Equador</option>
                                <option value="Eritr??ia">Eritr??ia</option>
                                <option value="Esc??cia">Esc??cia</option>
                                <option value="Eslov??quia">Eslov??quia</option>
                                <option value="Eslov??nia">Eslov??nia</option>
                                <option value="Espanha">Espanha</option>
                                <option value="Est??nia">Est??nia</option>
                                <option value="Eti??pia">Eti??pia</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Filipinas">Filipinas</option>
                                <option value="Finl??ndia">Finl??ndia</option>
                                <option value="Fran??a">Fran??a</option>
                                <option value="Gab??o">Gab??o</option>
                                <option value="G??mbia">G??mbia</option>
                                <option value="Gana">Gana</option>
                                <option value="Ge??rgia">Ge??rgia</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Granada">Granada</option>
                                <option value="Gr??cia">Gr??cia</option>
                                <option value="Guadalupe">Guadalupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guiana">Guiana</option>
                                <option value="Guiana Francesa">Guiana Francesa</option>
                                <option value="Guin??-bissau">Guin??-bissau</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Holanda">Holanda</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungria">Hungria</option>
                                <option value="I??men">I??men</option>
                                <option value="Ilhas Cayman">Ilhas Cayman</option>
                                <option value="Ilhas Cook">Ilhas Cook</option>
                                <option value="Ilhas Cura??ao">Ilhas Cura??ao</option>
                                <option value="Ilhas Marshall">Ilhas Marshall</option>
                                <option value="Ilhas Turks & Caicos">Ilhas Turks & Caicos</option>
                                <option value="Ilhas Virgens (brit.)">Ilhas Virgens (brit.)</option>
                                <option value="Ilhas Virgens(amer.)">Ilhas Virgens(amer.)</option>
                                <option value="Ilhas Wallis e Futuna">Ilhas Wallis e Futuna</option>
                                <option value="??ndia">??ndia</option>
                                <option value="Indon??sia">Indon??sia</option>
                                <option value="Inglaterra">Inglaterra</option>
                                <option value="Irlanda">Irlanda</option>
                                <option value="Isl??ndia">Isl??ndia</option>
                                <option value="Israel">Israel</option>
                                <option value="It??lia">It??lia</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Jap??o">Jap??o</option>
                                <option value="Jord??nia">Jord??nia</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Latvia">Latvia</option>
                                <option value="L??bano">L??bano</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Litu??nia">Litu??nia</option>
                                <option value="Luxemburgo">Luxemburgo</option>
                                <option value="Macau">Macau</option>
                                <option value="Maced??nia">Maced??nia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Mal??sia">Mal??sia</option>
                                <option value="Malaui">Malaui</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marrocos">Marrocos</option>
                                <option value="Martinica">Martinica</option>
                                <option value="Maurit??nia">Maurit??nia</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="M??xico">M??xico</option>
                                <option value="Moldova">Moldova</option>
                                <option value="M??naco">M??naco</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Nicar??gua">Nicar??gua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nig??ria">Nig??ria</option>
                                <option value="Noruega">Noruega</option>
                                <option value="Nova Caled??nia">Nova Caled??nia</option>
                                <option value="Nova Zel??ndia">Nova Zel??ndia</option>
                                <option value="Om??">Om??</option>
                                <option value="Palau">Palau</option>
                                <option value="Panam??">Panam??</option>
                                <option value="Papua-nova Guin??">Papua-nova Guin??</option>
                                <option value="Paquist??o">Paquist??o</option>
                                <option value="Peru">Peru</option>
                                <option value="Polin??sia Francesa">Polin??sia Francesa</option>
                                <option value="Pol??nia">Pol??nia</option>
                                <option value="Porto Rico">Porto Rico</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Qu??nia">Qu??nia</option>
                                <option value="Rep. Dominicana">Rep. Dominicana</option>
                                <option value="Rep. Tcheca">Rep. Tcheca</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Rom??nia">Rom??nia</option>
                                <option value="Ruanda">Ruanda</option>
                                <option value="R??ssia">R??ssia</option>
                                <option value="Saipan">Saipan</option>
                                <option value="Samoa Americana">Samoa Americana</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serra Leone">Serra Leone</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Singapura">Singapura</option>
                                <option value="S??ria">S??ria</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="St. Kitts & Nevis">St. Kitts & Nevis</option>
                                <option value="St. L??cia">St. L??cia</option>
                                <option value="St. Vincent">St. Vincent</option>
                                <option value="Sud??o">Sud??o</option>
                                <option value="Su??cia">Su??cia</option>
                                <option value="Sui??a">Sui??a</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Tail??ndia">Tail??ndia</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tanz??nia">Tanz??nia</option>
                                <option value="Togo">Togo</option>
                                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                <option value="Tun??sia">Tun??sia</option>
                                <option value="Turquia">Turquia</option>
                                <option value="Ucr??nia">Ucr??nia</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Uruguai">Uruguai</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietn??">Vietn??</option>
                                <option value="Zaire">Zaire</option>
                                <option value="Z??mbia">Z??mbia</option>
                                <option value="Zimb??bue">Zimb??bue</option>
                            </select>
                            <select value={tripId} onChange={onChangeTripId} required>
                                <option value="" disabled selected>Viagem</option>
                                {options}
                            </select>
                        </DivInfos>
                        <DivMensagemEnvar>
                            <h4>Por que voc?? quer viajar com a gente?</h4>
                            <input value={applicationText} onChange={onChangeText} placeholder="Mensagem" required />
                            <button>Enviar Candidatura</button>
                        </DivMensagemEnvar>
                        
                    </DivSecundaria>
                </div>)}
                
            </CardForm>
        </MainContainerForm>
    )
}

export default ApplicationFormPage 