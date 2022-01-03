import User from "../types/user";
import connection from "./connection";

export default class UserDatabase {
    async checkByEmail (email: string): Promise<boolean> {
        const users = await connection ('User_Arq')
            .where({email})
            .select('*')
        
        if (users.length > 0){
            return true
        } else {
            return false
        }
    }

    async create (user: User){
        await connection ('User_Arq')
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                name: user.getName(),
                password: user.getPassword(),
                role: user.getRole()
            })
    }

    async getByEmail (email: string): Promise<User> {
        const user = await connection ('User_Arq')
            .where({email})
            .select('*')
        
        const loginUser = new User(user[0]?.id, user[0]?.name, user[0]?.email, user[0]?.password, user[0]?.role)

        return loginUser
    }

    async getAll (page: number): Promise<User []> {
        const users = await connection ('User_Arq')
            .limit(10)
            .offset(10 * page)
            .select('*')
        
        const usersList = []
        for (let user of users) {
            const newUser = new User(user.id, user.name, user.email, user.password, user.role)
            usersList.push(newUser)
        }

        return usersList
    }

    async deleteById (id: string){
        await connection ('User_Arq')
            .where({id})
            .delete()
    }
}