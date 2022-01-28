import { Request, Response } from "express";
import ClientBusiness from "../business/ClientBusiness";

export default class ClientController {
    async create (req: Request, res: Response): Promise<void> {
        try {
            const {name, email, cpf, password} = req.body

            const token = await new ClientBusiness().create(name, email, cpf, password)

            res.status(200).send({
                message: "Cliente cadastrado.",
                token: token
            })
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async login (req: Request, res: Response): Promise <void> {
        try {
            const {email, password} = req.body

            const token = await new ClientBusiness().login(email, password)

            res.status(200).send({token: token})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async pay (req: Request, res: Response): Promise <void> {
        try {
            const token = req.headers.authorization as string
            const {type, cardId, amount} = req.body

            const boleto = await new ClientBusiness().pay(token, type, amount, cardId)

            if (type === 'Boleto'){
                res.status(200).send({message:'Pedido efetuado.', boleto: boleto})
            } else {
                res.status(200).send({message: 'Pagamento efetuado.'})
            }

        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async getPayments (req: Request, res: Response): Promise <void> {
        try {
            const token = req.headers.authorization as string

            const payments = await new ClientBusiness().getPayments(token)

            res.status(200).send({payments: payments})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async getPaymentByID (req: Request, res: Response): Promise <void> {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id
        
            const payment = await new ClientBusiness().getPaymentByID(token, id)

            res.status(200).send({payment: payment})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}