import UserDatabase from "../data/userDatabase"
import { Authenticator } from "../services/authenticator"

export default async function deleteUserBusiness (token: string, id: string){
    if (!token){
        throw new Error ('Token de autenticação não enviado.')
    }

    if (!id){
        throw new Error ('ID do usuário a ser excluído não enviada!')
    }

    const tokenData = new Authenticator().getTokenData(token)

    if(!tokenData){
        throw new Error ('Token de autenticação inválido!')
    }

    if (tokenData.role !== 'ADMIN'){
        throw new Error ('Usuário sem permissão!')
    }

    const userDB = new UserDatabase()
    await userDB.deleteById(id)
}