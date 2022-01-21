class Transactions {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string){
        this.description = description;
        this.value = value;
        this.date = date
    }

    getDescription(): string{
        return this.description
    }

    getValue(): number {
        return this.value
    }

    getDate(): string {
        return this.date
    }

}

export default Transactions