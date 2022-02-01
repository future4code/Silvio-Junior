import { Client } from "../model/Client";
import { Payment } from "../model/Payment";
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

    async pay (payment: Payment): Promise<void> {
        await connection ('wirecard_payment')
            .insert({
                id: payment.getId(),
                type: payment.getType(),
                card_id: payment.getCardId(),
                client_id: payment.getClientId(),
                amount: payment.getAmount(),
                status: payment.getStatus() 
            })
    }

    async getPayments (clientID: string): Promise <Payment []> {
        const payments = await connection ('wirecard_payments')
            .where({client_id: clientID})
            .select('*')
        
        const paymentList: Payment [] = []
        for (let pay of payments){
            const newPayment = new Payment(pay.id, pay.type, pay.card_id, pay.client_id, pay.amount, pay.status)

            paymentList.push(newPayment)
        }

        return paymentList
    }
}