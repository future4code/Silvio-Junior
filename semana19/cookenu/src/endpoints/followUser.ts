import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function FollowUser (req: Request, res: Response): Promise <void> {
    try {
        const token = req.headers.authorization
        const followedId = req.body.id 

        if (!token){
            res.statusCode = 401
            throw new Error ('Envie o token de autenticação!')
        }

        if (!followedId){
            throw new Error ('Informe o usuário a ser seguido!')
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData){
            throw new Error ("Token inválido!")
        }

        const userDB = new UserDatabase()

        const follows = await userDB.getFollows(tokenData.id)

        let isFollow: boolean = false

        for (let f of follows){
            if (followedId === f){
                isFollow = true
            }
        }

        if (isFollow){
            throw new Error ('Este usuário ja é seguido!')
        }
        
        await userDB.follow(tokenData.id, followedId)

        res.status(200).send('Usuário seguido com sucesso!')
        
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}