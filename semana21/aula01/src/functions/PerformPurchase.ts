import { User } from "../types/types";

export default function performPurchase (user: User, value: number): User {
    if (user.balance >= value){
        return {name: user.name, balance: user.balance - value}
    } else {
        return undefined
    }
}