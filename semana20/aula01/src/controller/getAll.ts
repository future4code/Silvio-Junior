import { Request, Response } from "express";
import getAllBusiness from "../business/getAllBusiness";

export default async function getAll (req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const page = Number(req.query.page) || 0 

        const users = await getAllBusiness(token, page)
        
        res.status(200).send(users)
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlmessage)
    }
}