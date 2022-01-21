import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export default async function Login (req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body

        if (!email || !password){
            res.statusCode = 422
            throw new Error ('Preencha os campos email e password!')
        }

        const userDB = new UserDatabase()
        const user = await userDB.searchUsers(email)

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user?.getPassword() || "")

        if (!user || !passwordIsCorrect){
            res.statusCode = 401
            throw new Error("Credenciais inválidas!")
        }

        const token = new Authenticator().generateToken({
            id: user.getId(),
            role: user.getRole()
        })

        res.status(200).send({ token })
        
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}