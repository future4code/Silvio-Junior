import { Character } from "../types/types";

export default function performAttack (
    attacker: Character, 
    defender: Character, 
    validator: (character: Character) => boolean): Character {
        const validAttack = validator(attacker)
        const validDefense = validator(defender)

        if (!validAttack || !validDefense){
            throw new Error("Invalid Character");
        }

        let newDefender = {... defender}
        if (attacker.strength > defender.defense){
            newDefender.health = defender.health - (attacker.strength - defender.defense)
        } 

        return newDefender
}