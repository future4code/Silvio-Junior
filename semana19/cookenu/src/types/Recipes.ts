export default class Recipes {
    constructor (
        protected id: string,
        protected title: string,
        protected description: string,
        protected date: string,
        protected userId: string
    ) {}

    getId(){
        return this.id
    }

    getTitle(){
        return this.title
    }

    getDescription(){
        return this.description
    }

    getDate(){
        return this.date
    }

    getUserId(){
        return this.userId
    }
}