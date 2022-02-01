export enum PaymenType {
    BOLETO = 'Boleto',
    CREDIT = 'Credit Card'
}

export enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED'
}

export class Payment {
    constructor (
        private id: string,
        private type: PaymenType,
        private cardId: string,
        private clientId: string,
        private amount: number,
        private status: Status
    ){}

    getId = () => this.id
    getType = () => this.type
    getCardId = () => this.cardId
    getClientId = () => this.clientId
    getAmount = () => this.amount
    getStatus = () => this.status
}