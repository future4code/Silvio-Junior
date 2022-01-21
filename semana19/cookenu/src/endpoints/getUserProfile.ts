import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function GetUserProfile (req:Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const userId = req.params.id

        if (!token){
            throw new Error ("Envie o token em authorization.")
        }

        if (!userId){
            throw new Error ("Informe o usuário para pesquisa do perfil!")
        }

        const tokenData = new Authenticator().getTokenData(token)

        if (!tokenData){
            throw new Error ("Token inválido!")
        }

        const userDB = new UserDatabase()
        const user = await userDB.getUserById(userId)

        if (!user){
            throw new Error ("Usuário não encontrado!")
        }

        const id = user.getId()
        const name = user.getName()
        const email = user.getEmail()

        res.status(200).send({id, name, email})
        
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}