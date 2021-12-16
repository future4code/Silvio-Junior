import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function GetOwnProfile (req:Request, res: Response): Promise <void> {
    try {
        const token = req.headers.authorization
        
        if (!token){
            res.statusCode = 401
            throw new Error ('Envie o token de autenticação!')
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData){
            throw new Error ("Token inválido!")
        }

        const userDB = new UserDatabase()
        const user = await userDB.getUserById(tokenData.id)

        const id = user?.getId()
        const name = user?.getName()
        const email = user?.getEmail()

        res.status(200).send({
            id,
            name, 
            email
        })

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}