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
}