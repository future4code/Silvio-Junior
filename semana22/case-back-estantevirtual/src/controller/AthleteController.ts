import { Request, Response } from "express";
import AthleteBusiness from "../business/AthleteBusiness";

export default class AthleteController {
    async create (req: Request, res: Response): Promise <void> {
        try {
            const {name} = req.body
            
            await new AthleteBusiness().create(name)

            res.status(200).send({message: 'Atleta criado.'})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}