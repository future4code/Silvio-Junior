import { Request, Response } from "express";
import CardBusiness from "../business/CardBusiness";

export default class CardController {
    async create (req: Request, res: Response): Promise<void> {
        try {
            const {holderName, cardNumber, cardExpiration, cardCvv} = req.body
            const token = req.headers.authorization as string

            await new CardBusiness().create(holderName, cardNumber, cardExpiration, cardCvv, token)
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}