import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, ContainerCabecalho, ContainerInfo, MainCard, MainRequests } from '../styles/RequestsStyles'
import { cnpj } from 'cpf-cnpj-validator';
import { cpf } from 'cpf-cnpj-validator'; 
import { useHistory } from 'react-router-dom';
import { goToEdit, goToErrorPage } from '../route/coordinators';

function RequestsPage () {
    const [requests, setRequests] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('http://localhost:3004/requests')
        .then((res) => {
            setRequests(res.data)
        })
        .catch((err) => {
            goToErrorPage(history)
        })
    }, [])

    const RenderizaRequests = requests && requests.map((request) => {
        return(
            <MainCard onClick={() => goToEdit(history, request.id)} >
                <ContainerInfo>
                    <h3>INFORMAÇÕES DO CLIENTE</h3>
                    <p><b>Solicitante:</b> {request.nome}</p>
                    <p><b>CFP:</b> {cpf.format(request.cpf)}</p>
                    <p><b>E-mail:</b> {request.email}</p>
                    <p><b>Telefone:</b>{request.telefone}</p>
                </ContainerInfo>
                <ContainerInfo>
                    <h3>INFORMAÇÕES DA EMPRESA</h3>
                    <p><b>CNPJ:</b>  {cnpj.format(request.cnpj)}</p>
                    <p><b>Faturamento:</b> R${parseFloat(request.faturamento).toLocaleString('pt-BR')}</p>
                    <p><b>Valor Solicitado:</b> R${parseFloat(request.solicitado).toLocaleString('pt-BR')}</p>
                </ContainerInfo>
                <ContainerInfo>
                    <h3>INFORMAÇÕES DE ENDEREÇO</h3>
                    <p><b>UF:</b> {request.endereco.uf}</p>
                    <p><b>Cidade:</b> {request.endereco.cidade}</p>
                    <p><b>Bairro:</b> {request.endereco.bairro}</p>
                    <p><b>Rua:</b> {request.endereco.rua}, {request.endereco.numero}, {request.endereco.complemento}</p>
                    <p><b>CEP:</b> {request.endereco.cep}</p>
                </ContainerInfo>
            </MainCard>
        )
    })
    return(
        <div>
            <ContainerCabecalho>
                <h1>Bem-vindo à página das requisições!</h1>
                <h4>Aqui, você pode visualizar as requisições pendentes. Clique em uma requisição para edita-la ou exclui-la.</h4>
            </ContainerCabecalho>
            <MainRequests>
                {RenderizaRequests}
            </MainRequests>
        </div>
        
    )
}

export default RequestsPage