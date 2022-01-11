import validateCharacter from "../src/functions/validateCharacter"
import { Character } from "../src/types/types"

describe ('validateCharacter test', () => {
    test("Name as ''", () => {
        let character: Character = {name: '', health: 20, strength: 20, defense: 10}
        expect(validateCharacter(character)).toBe(false)

        character = {name: 'Goku', health: 0, strength: 20, defense: 10}
        expect(validateCharacter(character)).toBe(false)

        character = {name: 'Goku', health: 20, strength: 0, defense: 10}
        expect(validateCharacter(character)).toBe(false)

        character = {name: 'Goku', health: 20, strength: 20, defense: 0}
        expect(validateCharacter(character)).toBe(false)

        character = {name: 'Goku', health: 20, strength: -200, defense: 10}
        expect(validateCharacter(character)).toBe(false)

        character = {name: 'Goku', health: 20, strength: 30, defense: 10}
        expect(validateCharacter(character)).toBe(true)
    })
})