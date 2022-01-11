import performAttack from "../src/functions/performAttack"
import { Character } from "../src/types/types"

describe ('performAttack test', () => {
    const sucessMock = (character: Character) => true
    const errorMock = (character: Character) => false

    test("Valid character", () => {
        let attacker: Character = { 
            name: "Goku",
            health: 7000,
            defense: 7000,
            strength: 13000}

        let defender: Character = {
            name: "Majin Boo",
            health: 10000,
            defense: 12800,
            strength: 5000
        }
        expect(performAttack(attacker, defender, sucessMock).health).toBe(9800)
    })
})