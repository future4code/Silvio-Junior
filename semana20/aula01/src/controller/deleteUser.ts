import { Request, Response } from "express"
import deleteUserBusiness from "../business/deleteUserBusiness"

export default async function deleteUser (req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string
        const userId = req.params.id as string
        
        deleteUserBusiness(token, userId)

        res.status(200).send({
            "message": "Usuário apagado com sucesso!"
        })
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlmessage)
    }
}