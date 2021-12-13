*** Exercício 1

**a)** Sim, pois essa forma possibilita maiores possibilidades de combinações, o que diminui a porbabilidade de coincidências entre id´s.

**b)** 

import { v4 } from 'uuid'

const gerarId = () =>{
    const id = v4();
    return id
}


*** Exercício 2

**a)** No primeiro bloco, é definido o nome da tabela:

const userTableName = "User";

Posteriormente, realiza-se a conexão com o banco de dados: 

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

Por fim, é criada uma função que recebe como parâmetros id, email e password e copula a tabela no banco de dados com o novo user: 

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

**b)* *

CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
);

**c)**

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into('User');
};

*** Exercício 3

**a)**

Define a tipagem do JWT_KEY como string, exatamente como se espera passar a palavra-chave.

**b)**

import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}