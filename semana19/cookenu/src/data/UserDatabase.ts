import User from "../types/User";
import connection from "./connection";

export default class UserDatabase{
    async create(user: User){
        await connection ('cookenu_users')
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
    }

    async searchUsers (email: string): Promise<User[]> {
        const users = await connection ('cookenu_users')
            .where({email})
        
        return users
    }
} 