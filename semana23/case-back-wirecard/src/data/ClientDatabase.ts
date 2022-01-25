import { Client } from "../model/Client";
import connection from "./connection";

export default class ClientDatabase {
    async getByEmail (email: string): Promise <Client | undefined > {
        const clientData = await connection ('wirecard_client')
            .where({email})
            .select('*')

        if (clientData.length > 0){
            const newClient = new Client(clientData[0].id, clientData[0].name, clientData[0].email, clientData[0].cpf, clientData[0].password)

            return newClient
        } else {
            return undefined
        }
    }

    async create (client: Client): Promise<void> {
        await connection ('wirecard_client')
            .insert({
                id: client.getId(),
                email: client.getEmail(),
                cpf: client.getCpf(),
                name: client.getName(),
                password: client.getPassword()
            })
    }
}