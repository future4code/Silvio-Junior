import { Card } from "../model/Card";
import connection from "./connection";

export default class CardDatabase {
    async create (card: Card): Promise <void> {
        await connection ('wirecard_card')
            .insert({
                id: card.getId(),
                holder_name: card.getHolderName(),
                card_cvv: card.getCardCvv(),
                card_number: card.getCardNumber(),
                card_expiration: card.getCardExpiration(),
                client_id: card.getClientId(), 
                type: card.getType()
            })
    }
}