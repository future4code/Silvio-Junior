import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

export default class UserController {
    async signup (req: Request, res: Response): Promise<void> {
        try {
            const {name, email, password} = req.body

            const token = await new UserBusiness().signup(name, email, password)

            res.status(200).send({message: 'Usuário criado!', token: token})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}