import validator from 'validator'
import { cpf } from 'cpf-cnpj-validator'
import valid, { expirationDate } from 'card-validator'
import { validCard } from '../model/Card'

export default class Validator {
    emailIsValid (email: string): boolean {
        return validator.isEmail(email)
    }

    cpfIsValid (clientCpf: string): boolean {
        return cpf.isValid(clientCpf)
    }

    formatCpf (clientCpf: string){
        return cpf.format(clientCpf)
    }

    cardValidNumber (cardNumber: string): any {
        const card = valid.number(cardNumber)

        return card
    }

    cardValidHolderName (holderName: string): boolean {
        return valid.cardholderName(holderName).isValid
    }

    cardValidExpirationData (cardExpiration: string): boolean{
        return valid.expirationDate(cardExpiration).isValid
    }

    cardValidCvv (cardCvv: string): boolean{
        return valid.cvv(cardCvv).isValid
    }
   
}