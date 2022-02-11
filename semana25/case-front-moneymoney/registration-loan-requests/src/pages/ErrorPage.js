import React from 'react'
import { MainError } from '../styles/ErrorStyle'

function ErrorPage (){
    return(
        <MainError>
            <h1>Ops... Algo inesperado aconteceu aqui!</h1>
            <h3>Algumas coisas que você pode verificar:</h3>
            <ol>
                <li>Verifique se o endereço passado para a página está correto. Nessa página de testes, temos os endereços:</li>
                    <ol>
                        <li>'/', que irá para Home Page.</li>
                        <li>'/register_request', que irá para a página do formulário de registros.</li>
                        <li>'/requests_page', que irá para a página de visualização das requisições.</li>
                        <li>'/registration_details/:id', que recebe como parametro a id de uma requisição e irá para a página de edição da mesma.</li>
                    </ol>
                <li>Verifique se o json-server está rodando na porta 3004.</li>
                    <ol>
                        <li>Se você estiver dentro da pasta principal, entre na pasta 'src' e, posteriormente, na pasta 'data'.</li>
                        <li>Dentro da pasta 'data', no bash, rode o comando: json-server --watch db.json --port 3004</li>
                    </ol>
                <li>Você ainda pode navegar pela aplicação a partir dos botões disponíveis no Header dessa página.</li>
            </ol>
        </MainError>
    )
}

export default ErrorPage