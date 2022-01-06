import { User } from "../types/Users"
import connection from "./connection"

export default class UserDatabase {
    async searchUsers (email: string): Promise<boolean> {
        
        const users = await connection ('labook_users')
            .where({email: email})
            .select('*')
        
        if (users.length > 0){
            return true
        } else {
            return false
        }
    }

    async create (user: User): Promise <void>{

        await connection ('labook_users')
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword()
            })
    }
}