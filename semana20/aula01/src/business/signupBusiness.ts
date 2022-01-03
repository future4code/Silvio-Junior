import UserDatabase from "../data/userDatabase"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"
import IdGenerator from "../services/idGenerator"
import { ROLE } from "../types/role"
import User from "../types/user"
import authenticationData from "../types/authenticationData"

export default async function signupBusiness (name: string, email: string, password: string, role: string | undefined): Promise<string> {
    if (!name || ! email || !password){
        throw new Error ("Preencha os campos 'name', 'email' e 'password'!")
    }
    
    const userDB = new UserDatabase()
    const registeredEmail = await userDB.checkByEmail(email)

    if (registeredEmail){
        throw new Error ('Email já cadastrado!')
    }

    let userRole
    if (role === 'ADMIN'){
        userRole = ROLE.ADMIN
    } else {
        userRole = ROLE.NORMAL
    }

    const hashPassword = new HashManager().createHash(password)
    const userId = new IdGenerator().generateId()

    const newUser = new User(userId, name, email, hashPassword, userRole)
    await userDB.create(newUser)

    const token = new Authenticator().generateToken({id: userId, role: userRole})
    console.log(token)

    return token
}