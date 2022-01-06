import UserDatabase from "../data/UserDatabase"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import IdGenerator from "../services/idGenerator"
import { User } from "../types/Users"

export default class UserBusiness {
    async signup(name: string, email: string, password: string): Promise<string> {
        if (!name || !email || !password){
            throw new Error ("Preencha os campos 'name', 'email' e 'password'")
        }

        const userDB = new UserDatabase()
        const usedEmail = await userDB.searchUsers(email)

        if (usedEmail){
            throw new Error ('Email já cadastrado!')
        }

        const hashPassword = new HashManager().createHash(password)
        const id = new IdGenerator().generateId()

        const newUser = new User(id, name, hashPassword, email)
        await userDB.create(newUser)

        const token = new Authenticator().generateToken({id: id})

        return token
    }
}