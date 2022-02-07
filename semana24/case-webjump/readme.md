# Desafio Back-End -- Node.js

### Tecnologias

O projeto *back-end* foi constrído em **Node.Js**, fazendo uso de bibliotecas como o *cors*, *express*, *knex*, *mysql*, *dotenv*, *uuid* e *jest*.
- [Node.Js](https://nodejs.org/en/)
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://expressjs.com/pt-br/)
- [Knex](https://knexjs.org/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Uuid](https://www.npmjs.com/package/uuid)
- [Jest](https://jestjs.io/pt-BR/)

### Para testar o projeto:

    npm i

Instala as dependências necessárias para a aplicação.

    npm run migrations

Cria as tabelas necessárias para a aplicação.

    npm run dev

Cria um servidor da aplicação na porta passada no arquivo .env, ou então na porta 3003.

	npm run test

Roda os testes unitários  implementados na aplicação.

Para o arquivo .env, criar as variáveis:
- DB_HOST - algum banco de dados MySQL;
- DB_PORT - porta para o bando de dados;
- DB_USER - username do banco de dados;
- DB_PASSWORD - senha do banco de dados;
- DB_NAME - schema do banco de dados;
- PORT - porta para a aplicação.

### Documentação

Para acessar a documentação do projeto de back end, [clique aqui](https://documenter.getpostman.com/view/17590830/UVeAwUpb).

### Autor

Silvio Ribeiro Dias Jr.

- [LinkedIn](https://www.linkedin.com/in/silvio-dias-junior/)
- [Github](https://github.com/silviordjr)
- Email: silviordjr@outlook.com

<hr/>
### Enunciado do desafio
<hr/>

# Você quer ser um desenvolvedor Backend na Web Jump?
Criamos esse teste para avaliar seus conhecimentos e habilidades como desenvolvedor backend.

# O teste
O desafio é desenvolver um sistema de gerenciamento de produtos. Esse sistema será composto de um cadastro de produtos e categorias. Os requisitos desse sistema estão listados nos tópicos abaixo.
Não existe certo ou errado, queremos saber como você se sai em situações reais como esse desafio.

# Instruções
- O foco principal do nosso teste é o backend. Para facilitar você poderá utilizar os arquivos html  disponíveis no diretório assets
- Crie essa aplicação como se fosse uma aplicação real, que seria utilizada pelo WebJump
- Fique à vontade para usar bibliotecas/componentes externos (composer)
- Não utilize nenhum Framework, tais como Laravel, Lumen ou Symphony
- Seguir princípios **SOLID** 
- Utilize boas práticas de programação
- Utilize boas práticas de git
- Documentar como rodar o projeto
- Crie uma documentação simples comentando sobre as tecnologias, versões e soluções adotadas

# Requisitos
- O sistema deverá ser desenvolvido utilizando a linguagem PHP (de preferência a versão mais nova) ou outra linguagem se assim foi especificado para sua avaliação por nossa equipe.
- Você deve criar um CRUD que permita cadastrar as seguintes informações:
	- **Produto**: Nome, SKU (Código), preço, descrição, quantidade e categoria (cada produto pode conter uma ou mais categorias)
	- **Categoria**: Código e nome.
- Salvar as informações necessárias em um banco de dados (relacional ou não), de sua escolha

# Opcionais
- Gerar logs das ações
- Testes automatizados com informação da cobertura de testes
- Upload de imagem no cadastro de produtos

# O que será avaliado
- Estrutura e organização do código e dos arquivos
- Soluções adotadas
- Tecnologias utilizadas
- Qualidade
- Padrões PSR, Design Patterns
- Enfim, tudo será observado e levado em conta

# Como iniciar o desenvolvimento
- **Fork** esse repositório na sua conta do BitBucket.
- Crie uma branch com o nome **desafio**

# Como enviar seu teste
Envie um email para [carreira@webjump.com.br] com o link do seu repositório.

Se o seu repositório for privado, conceda acesso aos emails: eliel.depaula@webjump.com.br, deocleciano.junior@webjump.com.br, gustavo.alves@webjump.com.br.

Qualquer dúvida sobre o teste, fique a vontade para entrar em contato conosco.
