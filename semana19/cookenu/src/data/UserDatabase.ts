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

    async searchUsers (userEmail: string): Promise<User | undefined> {
        
        const users = await connection ('cookenu_users')
            .where({email: userEmail})
        
        const {id, name, email, password: hashPassword, role: userRole} = users[0]
        
        let usersReturn = new User(id, name, email, hashPassword, userRole)

        return usersReturn
    }

    async getUserById (userId: string): Promise <User | undefined> {

        const users = await connection ('cookenu_users')
            .where({id: userId})
        
        const {id, name, email, password: hashPassword, role: userRole} = users[0]

        let usersReturn = new User(id, name, email, hashPassword, userRole)

        return usersReturn
    }
} 