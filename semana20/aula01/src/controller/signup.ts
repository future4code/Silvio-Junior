import { Request, Response } from "express";
import signupBusiness from "../business/signupBusiness";

export default async function signup (req: Request, res: Response): Promise<void> {
    try {
        const {name, email, password, role} = req.body

        const token = await signupBusiness(name, email, password, role)

        res.status(200).send({token: token})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlmessage)
    }
}