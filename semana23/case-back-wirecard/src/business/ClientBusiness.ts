import ClientDatabase from "../data/ClientDatabase"
import { Client } from "../model/Client"
import { Payment, PaymenType, Status } from "../model/Payment"
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

    async pay (token: string, type: string, amount: number, cardId?: string): Promise <void | string> {
        if (!type || !amount){
            throw new Error ('Envie as informações obrigatórias (type e amount).')
        }

        if (!token){
            throw new Error ('Envie o token de autorização pelo authorization do headers.')
        }

        let paymentType: PaymenType
        if (type === 'Boleto'){
            paymentType = PaymenType.BOLETO
        } else if (type === 'Credit Card') {
            paymentType = PaymenType.CREDIT
        } else {
            throw new Error ("As formas de pagamento válidas são: 'Boleto' e 'Credit Card'.")
        }

        let card: string
        let status: Status = Status.PENDING
        if (paymentType === PaymenType.CREDIT && !cardId){
            throw new Error ('Envie a ID do cartão no campo cardId.')
        } else if (paymentType === PaymenType.CREDIT && cardId){
            card = cardId
            status = Status.APPROVED
        }

        if (paymentType === PaymenType.BOLETO){
            card = new IdGenerator().generateId()
            status = Status.PENDING
        }

        const tokenData = new Authenticator().getTokenData(token)
        if (!tokenData){
            throw new Error ('Token inválido.')
        }

        if (amount <= 0){
            throw new Error ('Envie uma quantia válida.')
        }

        if (!cardId || !status){
            throw new Error ('Não foi possível realizar a operação, tente novamente')
        }

        const id = new IdGenerator().generateId()

        const newPayment = new Payment(id, paymentType, cardId, tokenData.id, amount, status)
        
        await new ClientDatabase().pay(newPayment)

        if (paymentType === PaymenType.BOLETO){
            return cardId
        }
    }

    async getPayments (token: string): Promise<Payment []> {
        if (!token){
            throw new Error ("Envie o token de autorização no campo authorization do headers.")
        }

        const tokenData = new Authenticator().getTokenData(token)
        if (!tokenData){
            throw new Error ("Token inválido.")
        }


        const payments = await new ClientDatabase().getPayments(tokenData.id)

        return payments
    }

    async getPaymentByID (token: string, id: string): Promise <Payment> {
        if (!token){
            throw new Error ("Envie o token de autenticação no campo authorization do headers.")
        }

        if (!id){
            throw new Error ("Envie a ID do pagamento como path params")
        }

        const tokenData = new Authenticator().getTokenData(token)
        if (!tokenData){
            throw new Error ("Token inválido.")
        }

        const payment = await new ClientDatabase().getPaymenByID(id)

        if (payment.getClientId() !== tokenData.id){
            throw new Error ("Você não tem autorização para acessar este pagamento.")
        }

        return payment
    }
}