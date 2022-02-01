import CardDatabase from "../data/CardDatabase"
import { Card } from "../model/Card"
import { Authenticator } from "../services/authenticator"
import IdGenerator from "../services/idGenerator"
import Validator from "../services/validator"

export default class CardBusiness {
    async create (
        holderName: string, 
        cardNumber: string, 
        cardExpiration: string, 
        cardCvv: string,
        token: string): Promise <void> {
            if (!holderName || !cardNumber || !cardExpiration || !cardCvv){
                throw new Error ("Envie as informações do cartão (holderName, cardNumber, cardExpiration e cardCvv).")
            }

            if (!token){
                throw new Error ('Envie o token de autenticação no campo authorization do headers.')
            }

            const tokenData = new Authenticator().getTokenData(token)
            const validNumber = new Validator().cardValidNumber(cardNumber)
            const holderNameIsValid = new Validator().cardValidHolderName(holderName)
            const cardExpirationIsValid = new Validator().cardValidExpirationData(cardExpiration)
            const cardCvvIsValid = new Validator().cardValidCvv(cardCvv)

            if (!tokenData){
                throw new Error ("Token inválido.")
            }

            if (!validNumber.isValid){
                throw new Error ('Número de cartão inválido.')
            }

            if (!holderNameIsValid){
                throw new Error ("Holder name inválido.")
            }

            if (!cardExpirationIsValid){
                throw new Error ("Data de expiração inválida.")
            }

            if (!cardCvvIsValid){
                throw new Error ('CVV inválido.')
            }

            const id = new IdGenerator().generateId()

            const newCard = new Card(id, holderName, validNumber.card.niceType, cardNumber, cardExpiration, cardCvv, tokenData.id)

            await new CardDatabase().create(newCard)
        }
}