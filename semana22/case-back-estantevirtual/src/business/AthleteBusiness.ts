import AthelteDatabase from "../data/AthleteDatabse"
import { Athlete } from "../model/Athlete"
import IdGenerator from "../services/IdGenerator"

export default class AthleteBusiness {
    async create (name: string): Promise <void> {
        if (!name){
            throw new Error ('Preencha o campo obrigatório (name).')
        }

        const id = new IdGenerator().generateId()

        const newAthlete = new Athlete(id, name)

        await new AthelteDatabase().create(newAthlete)
    }
}