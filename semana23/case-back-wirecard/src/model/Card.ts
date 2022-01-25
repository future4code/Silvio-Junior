export type validCardInfos = {
    niceType: string,
    type: string,
    gaps: number [],
    lengths: number [],
    code: code
}

export type code = {
    name: string,
    size: number
}

export type validCard = {
    card: validCardInfos
    isPotentiallyValid: boolean
    isValid: boolean
}

export class Card {
    constructor(
        private id: string,
        private holderName: string,
        private type: string,
        private cardNumber: string,
        private cardExpiration: string,
        private cardCvv: string,
        private clientID: string
    ){}

    getId = () => this.id
    getHolderName = () => this.holderName
    getType = () => this.type
    getCardNumber = () => this.cardNumber
    getCardExpiration = () => this.cardExpiration
    getCardCvv = () => this.cardCvv
    getClientId = () => this.clientID
}