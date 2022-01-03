import { ROLE } from "./role";

export default class User {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected password: string,
        protected role: ROLE
    ){}

    getId () {
        return this.id
    }

    getName () {
        return this.name
    }

    getEmail () {
        return this.email
    }

    getPassword () {
        return this.password
    }

    getRole () {
        return this.role
    }
}