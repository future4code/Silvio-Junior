import UserDatabase from "../data/userDatabase"
import { Authenticator } from "../services/authenticator"
import { HashManager } from "../services/hashManager"

export default async function loginBusiness (email: string, password: string): Promise<string> {
   if (!email || !password){
       throw new Error ('Preencha os campos de email e senha!')
   }

   const userDB = new UserDatabase()
   const user = await userDB.getByEmail(email)
   console.log(user)
   if (!user.getId()){
       throw new Error ('Email ou senha incorreto.')
   }

   const hashPassword = user.getPassword()
   const passwordIsCorrect = new HashManager().compareHash(password, hashPassword)

   if (!passwordIsCorrect){
       throw new Error ('Email ou senha incorreto.')
   }

   const token = new Authenticator().generateToken({id: user.getId(), role: user.getRole()})

   return token
}