import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { Button, ContainerFlexInputs, Form, Input, LeftContainer, MainRegistration, RightContainer } from '../styles/RegistrationStyles'
import { cpf } from 'cpf-cnpj-validator'; 
import { cnpj } from 'cpf-cnpj-validator';
import { useParams, useHistory } from 'react-router-dom';
import { goToErrorPage, goToHome } from '../route/coordinators';
import { DeleteButton } from '../styles/EditStyle';

function EditPage () {
    const [cnpjIsWrong, setCnpjIsWrong] = useState(false)
    const [cpfIsWrong, setCpfIsWrong] = useState(false)
    const [flagEndereco, setFlagEndereco] = useState(false)
    const params = useParams()
    const requestId = params.id
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

    const atualizaValores = (data) => {
        form.cnpj = data.cnpj
        form.solicitado = data.solicitado
        form.faturamento = data.faturamento
        form.nome = data.nome
        form.cpf = data.cpf
        form.telefone = data.telefone    
        form.email = data.email
        form.cep = data.endereco.cep
        form.cidade = data.endereco.cidade
        form.uf = data.endereco.uf
        form.rua = data.endereco.rua
        form.bairro = data.endereco.bairro
        form.numero = data.endereco.numero 
        form.complemento = data.endereco.numero
        setFlagEndereco(!flagEndereco)
    }

    useEffect(() => {
        axios.get(` http://localhost:3004/requests/${requestId}`)
        .then((res) => {
            atualizaValores(res.data)
        })
        .catch((err) => {
            goToErrorPage(history)
        })
    }, [])

    const updateRequest = (event) => {
        event.preventDefault()


        if (cpf.isValid(form.cpf) && cnpj.isValid(form.cnpj)){


            const request = {
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
            
            axios.put(`http://localhost:3004/requests/${requestId}`, request, headers)
            .then((res) => {
                alert('Solicitação Alterada com sucesso!')
                goToHome(history)
            })
            .catch((err) => {
                goToErrorPage(history)
            })

        } else {
            alert('Por favor, verifique a validade do CPF e do CNPJ passados.')
            console.log('cpf', form.cpf, cpf.isValid(form.cpf))
            console.log('npj', form.cnpj, cnpj.isValid(form.cnpj))
        }

       
    }

    const deleteRequest = () => {
        if (window.confirm('Você realmete deseja excluir a solicitação?')){
            axios.delete(`http://localhost:3004/requests/${requestId}`)
            .then((res) => {
                alert('Solicitação excluída com sucesso!')
                goToHome(history)
            })
            .catch((err) => {
                goToErrorPage(history)
            })
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
            goToErrorPage(history)
        })
    }

    return(
        <MainRegistration>
            <h1>Modifique os dados ou exclua a solicitação de seu empréstimo</h1>
            <DeleteButton onClick={deleteRequest} >Excluir Solicitação</DeleteButton>
            <Form onSubmit={updateRequest}>
                <LeftContainer>
                    <div>
                        <h3>Informações da Empresa</h3>
                        {cnpjIsWrong && <p>Você deve informar um CNPJ válido!</p>}
                        <Input placeholder='CNPJ' onBlur={verificaCnpj} onChange={onChange} value={form.cnpj} name='cnpj' type='number' min='0' required />
                        <ContainerFlexInputs>
                            <input placeholder='Valor Solicitado' onChange={onChange} value={form.solicitado} name='solicitado' type='number' step=".01" min='0' required />
                            <input placeholder='Faturamento Anual' onChange={onChange} value={form.faturamento} name='faturamento' type='number' step=".01" min='0' required />
                        </ContainerFlexInputs>
                    </div>

                    <div>
                        <h3>Informações do Solicitante</h3>
                        <Input placeholder='Nome Completo' onChange={onChange} value={form.nome} name='nome' required />
                        <ContainerFlexInputs>
                            {cpfIsWrong && <p>Você deve informar um CPF válido!</p>}
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
                    <Button>Atualizar Informações</Button>
                </RightContainer>


            </Form>
        </MainRegistration>
    )
}

export default EditPage