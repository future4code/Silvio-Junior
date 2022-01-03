import UserDatabase from "../data/userDatabase";
import { Authenticator } from "../services/authenticator";
import User from "../types/user";

export default async function getAllBusiness (token: string, page: number): Promise<User []> {
    if (!token){
        throw new Error ('Token de autenticação não enviado.')
    }

    const tokenData = new Authenticator().getTokenData(token)

    if (!tokenData){
        throw new Error ('Token de autenticação inválido!')
    }

    const userDB = new UserDatabase()
    const users = await userDB.getAll(page)

    return users
}