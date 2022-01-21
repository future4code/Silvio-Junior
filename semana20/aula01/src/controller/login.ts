import { Request, Response } from "express";
import loginBusiness from "../business/loginBusiness";

export default async function login (req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body

        const token = await loginBusiness(email, password)
        
        res.status(200).send({token: token})
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlmessage)
    }
}