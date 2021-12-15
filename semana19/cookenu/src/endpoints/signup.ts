import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { ROLE } from "../types/role";
import User from "../types/User";

export default async function SignUp (req: Request, res: Response): Promise<void> {
    try {
        const {name, email, password, role} = req.body

        if (!name){
            throw new Error('Preencha o campo name.')
        } else if (!email) {
            throw new Error('Preencha o campo email.')
        } else if (!password){
            throw new Error('Preencha o campo password.')
        }
        
        if (password.length < 6){
            throw new Error ('Sua senha deve ter no mínimo 6 caracteres.')
        }

        const userDB = new UserDatabase()
        const verifyUsers = await userDB.searchUsers(email)

        if (verifyUsers.length > 0){
            throw new Error ('Email ja cadastrad0.')
        }

        let userRole: ROLE = role

        if (!role){
            userRole = ROLE.USER
        }

        const id = new IdGenerator().generateId()

        const hashPassword = new HashManager().createHash(password)

        const newUser = new User(id, name, email, hashPassword, userRole)

        await userDB.create(newUser)

        res.status(201).send('Usuário cadastrado com sucesso!')

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}