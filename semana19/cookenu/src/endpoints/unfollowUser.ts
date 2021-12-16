import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import UserDatabase from "../data/UserDatabase";

export default async function UnfollowUser (req: Request, res: Response): Promise <void> {
    try {
        const token = req.headers.authorization
        const followedId = req.body.id

        if (!token){
            res.statusCode = 401
            throw new Error ('Envie o token de autenticação!')
        }

        if (!followedId){
            throw new Error ('Informe o usuário a ser desseguido!')
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData){
            throw new Error ("Token inválido!")
        }

        const userDB = new UserDatabase()
        await userDB.unfollow(tokenData.id, followedId)

        res.status(200).send('Usuário desseguido com sucesso!')

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}