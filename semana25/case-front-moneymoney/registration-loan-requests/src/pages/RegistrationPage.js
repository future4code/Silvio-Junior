import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { Button, ContainerFlexInputs, ErrorMessage, Form, Input, LeftContainer, MainRegistration, RightContainer } from '../styles/RegistrationStyles'
import { cpf } from 'cpf-cnpj-validator'; 
import { cnpj } from 'cpf-cnpj-validator';
import { goToErrorPage } from '../route/coordinators';
import { useHistory } from 'react-router-dom';


function RegistrationPage () {
    const [cnpjIsWrong, setCnpjIsWrong] = useState(false)
    const [cpfIsWrong, setCpfIsWrong] = useState(false)
    const [flagEndereco, setFlagEndereco] = useState(false)
    const history = useHistory()
    const [form, onChange, clear] = useForm({
        cnpj: '',
        solicitado: '',
        faturamento: '',
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        cep: '',
        cidade: '',
        uf: '',
        rua: '',
        bairro: '',
        numero: '', 
        complemento: ''
    })

    const registerRequest = (event) => {
        event.preventDefault()


        if (cpf.isValid(form.cpf) && cnpj.isValid(form.cnpj)){
            const id = Date.now().toString()

            const request = {
                id: id,
                cnpj: form.cnpj,
                solicitado: form.solicitado,
                faturamento: form.faturamento,
                nome: form.nome,
                cpf: form.cpf,
                telefone: form.telefone,
                email: form.email,
                endereco: {
                    cep: form.cep,
                    cidade: form.cidade,
                    uf: form.uf,
                    rua: form.rua,
                    bairro: form.bairro,
                    numero: form.numero, 
                    complemento: form.complemento
                }
            }

            const headers = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: window.localStorage.getItem('token')
                }
            }
            
            axios.post('http://localhost:3004/requests', request, headers)
            .then((res) => {
                alert('Solicitação cadastrada com sucesso!')
                clear()
            })
            .catch((err) => {
                goToErrorPage(history)
            })

        } else {
            alert('Por favor, verifique a validade do CPF e do CNPJ passados.')
        }

       
    }

    const verificaCnpj = () => {
        if (!cnpj.isValid(form.cnpj)){
            setCnpjIsWrong(true)
        } else {
            setCnpjIsWrong(false)
        }
    }

    const verificaCpf = () => {
        if (!cpf.isValid(form.cpf)){
            setCpfIsWrong(true)
        } else {
            setCpfIsWrong(false)
        }

    }

    const pegaEndereco = () => {
        const cep = form.cep.toString()

        axios.get(`https://ws.apicep.com/cep/${cep}.json`)
        .then((res) => {
            form.cidade = res.data.city
            form.uf = res.data.state
            form.bairro = res.data.district
            form.rua = res.data.address
            setFlagEndereco(!flagEndereco)
        })
        .catch((err) => {
            console.log (err)
        })
    }

    return(
        <MainRegistration>
            <h1>Realize seu cadastro através do formulário para realizar a solicitação de seu empréstimo</h1>
            <Form onSubmit={registerRequest}>
                <LeftContainer>
                    <div>
                        <h3>Informações da Empresa</h3>
                        {cnpjIsWrong && <ErrorMessage>Você deve informar um CNPJ válido!</ErrorMessage>}
                        <Input placeholder='CNPJ' onBlur={verificaCnpj} onChange={onChange} value={form.cnpj} name='cnpj' type='number' min='0' required />
                        <ContainerFlexInputs>
                            <input placeholder='Valor Solicitado' onChange={onChange} value={form.solicitado} name='solicitado' type='number' step=".01" min='0' required />
                            <input placeholder='Faturamento Anual' onChange={onChange} value={form.faturamento} name='faturamento' type='number' step=".01" min='0' required />
                        </ContainerFlexInputs>
                    </div>

                    <div>
                        <h3>Informações do Solicitante</h3>
                        <Input placeholder='Nome Completo' onChange={onChange} value={form.nome} name='nome' required />
                        {cpfIsWrong && <ErrorMessage>Você deve informar um CPF válido!</ErrorMessage>}
                        <ContainerFlexInputs>
                            <input placeholder='CPF' onBlur={verificaCpf} onChange={onChange} value={form.cpf} name='cpf' type='number' min='0' required />
                            <input placeholder='Telefone' onChange={onChange} value={form.telefone} name='telefone' type='tel' required />
                        </ContainerFlexInputs>
                        <Input placeholder='E-mail' onChange={onChange} value={form.email} name='email' type='email' required />
                    </div>
                </LeftContainer>

                <RightContainer>
                    <h3>Endereço</h3>
                    <Input placeholder='CEP' onBlur={pegaEndereco} onChange={onChange} value={form.cep} name='cep' type='number' min='0' required />
                    <ContainerFlexInputs>
                        <input placeholder='Cidade' onChange={onChange} value={form.cidade} name='cidade' required />
                        <input placeholder='UF' onChange={onChange} value={form.uf} name='uf' required />
                    </ContainerFlexInputs>
                    <Input placeholder='Rua' onChange={onChange} value={form.rua} name='rua' required />
                    <ContainerFlexInputs>
                        <input placeholder='Bairro' onChange={onChange} value={form.bairro} name='bairro' required />
                        <input placeholder='Número' onChange={onChange} value={form.numero} name='numero' required />
                    </ContainerFlexInputs>
                    <Input placeholder='Complemento' onChange={onChange} value={form.complemento} name='complemento' />
                    <Button>Enviar</Button>
                </RightContainer>


            </Form>
        </MainRegistration>
    )
}

export default RegistrationPage