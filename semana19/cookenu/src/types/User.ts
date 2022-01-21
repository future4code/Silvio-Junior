import { ROLE } from "./role";

export default class User {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected password: string,
        protected role: ROLE
    ) {}

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }

    getRole(): ROLE {
        return this.role
    }
}