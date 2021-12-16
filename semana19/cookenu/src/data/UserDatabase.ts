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

    async follow (followingId: string, followedId: string) {
        await connection ('cookenu_follows')
            .insert({
                user_following_id: followingId,
                user_followed_id: followedId
            })
    }

    async unfollow (followingId: string, followedId: string) {
        await connection ('cookenu_follows')
            .where({
                user_following_id: followingId,
                user_followed_id: followedId
            })
            .del()
    }

    async getFollows (userId: string): Promise <string [] > {
        const follows = await connection ('cookenu_follows')
            .select("user_followed_id")
            .where({
                user_following_id: userId
            })
        const userFollows = follows.map((follow) => {
            return follow.user_followed_id
        })
        
        return userFollows
    }
} 