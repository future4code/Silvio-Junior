import { Categories } from './Categories'

export class Products {
    constructor(
        private sku: string,
        private name: string,
        private description: string,
        private price: number,
        private quantity: number,
        private categories: string [] | Categories []
    ){}

    getSku = () => this.sku
    getName = () => this.name
    getDescription = () => this.description
    getPrice = () => this.price
    getQunatity = () => this.quantity
    getCategories = () => this.categories
}