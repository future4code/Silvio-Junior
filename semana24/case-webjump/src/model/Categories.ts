export class Categories {
    constructor(
        private id: string,
        private name: string
    ){}

    getId = () => this.id
    getName = () => this.name
}