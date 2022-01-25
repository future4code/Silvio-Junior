export class Client {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: string, 
        private password: string

    ){}

    getId = () => this.id
    getName = () => this.name
    getEmail = () => this.email
    getCpf = () => this.cpf
    getPassword = () => this.password
}

export type authenticationData = {
    id: string
}