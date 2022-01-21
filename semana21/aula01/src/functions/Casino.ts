import { Casino, LOCATION, NACIONALITY, Result, ResultItem, UserCassino } from "../types/types";

export default function casino (casino: Casino, users: UserCassino []): Result {
    const brazilianAllowed = []
    const americanAllowed = []
    const brazilianUnallowed = []
    const americanUnallowed = []

    if (casino.location === LOCATION.BRAZIL){
        for (let user of users){
            if (user.age >= 18){
                if (user.nacionality === NACIONALITY.BRAZILIAN){
                    brazilianAllowed.push(user.name)
                } else if (user.nacionality === NACIONALITY.AMERICAN){
                    americanAllowed.push(user.name)
                }
            } else {
                if (user.nacionality === NACIONALITY.BRAZILIAN){
                    brazilianUnallowed.push(user.name)
                } else if (user.nacionality === NACIONALITY.AMERICAN){
                    americanUnallowed.push(user.name)
                }
            }
        }
    } else if (casino.location === LOCATION.EUA){
        for (let user of users){
            if (user.age >= 21){
                if (user.nacionality === NACIONALITY.BRAZILIAN){
                    brazilianAllowed.push(user.name)
                } else if (user.nacionality === NACIONALITY.AMERICAN){
                    americanAllowed.push(user.name)
                }
            } else {
                if (user.nacionality === NACIONALITY.BRAZILIAN){
                    brazilianUnallowed.push(user.name)
                } else if (user.nacionality === NACIONALITY.AMERICAN){
                    americanUnallowed.push(user.name)
                }
            }
        }
    }

    const res = {
        brazilians: {
            allowed: brazilianAllowed,
            unallowed: brazilianUnallowed
        },
        americans: {
            allowed: americanAllowed,
            unallowed: americanUnallowed
        }
    }

    return res
}