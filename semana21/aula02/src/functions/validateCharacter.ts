import { Character } from "../types/types";

export default function validateCharacter (character: Character): boolean {
    let valideCharacter: boolean = true 

    const { name, health, defense, strength} = character

    if (!name || ! health || !defense || !strength){
        valideCharacter = false
    }

    if (health <= 0 || defense <= 0 || strength <= 0){
        valideCharacter = false
    }

    return valideCharacter
}