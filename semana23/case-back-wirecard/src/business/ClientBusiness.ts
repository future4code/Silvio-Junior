import ClientDatabase from "../data/ClientDatabase"
import { Client } from "../model/Client"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import IdGenerator from "../services/idGenerator"
import Validator from "../services/validator"

export default class ClientBusiness {
    async create (
        name: string, 
        email: string, 
        cpf: string, 
        password: string): Promise <string> {
            if (!name || !email || !cpf || !password){
                throw new Error ('Envie os parâmetros obrigatórios (name, email, cpf e password).')
            }

            const emailIsValid = new Validator().emailIsValid(email)
            const cpfIsValid = new Validator().cpfIsValid(cpf)

            if (!emailIsValid){
                throw new Error ('Informe um email válido.')
            }

            if (!cpfIsValid){
                throw new Error ('Insira um cpf válido.')
            }

            const usedEmail = await new ClientDatabase().getByEmail(email)

            if (usedEmail){
                throw new Error ('Já existe uma conta associada à este email.')
            }

            const id = new IdGenerator().generateId()
            const hashPassword = new HashManager().createHash(password)
            const cpfFormat = new Validator().formatCpf(cpf)

            const newClient = new Client(id, name, email, cpfFormat, hashPassword)
            
            await new ClientDatabase().create(newClient)

            const token = new Authenticator().generateToken({id})

            return token
    }

    async login (email: string, password: string): Promise <string> {
        if (!email || !password){
            throw new Error ("Envie os parametros obrigatorios (email e password).")
        }

        const client = await new ClientDatabase().getByEmail(email)

        if (!client){
            throw new Error ('Email ou senha inválidos.')
        }

        const passwordIsCorrect = new HashManager().compareHash(password, client.getPassword())

        if (!passwordIsCorrect){
            throw new Error ('Email ou senha inválidos.')
        }

        const token = new Authenticator().generateToken({id: client.getId()})

        return token
    }
}