import Transactions from "../Transactions/Transactions";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transactions[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    setTransactions(transation: Transactions){
       this.transactions.push(transation)

       this.balance = this.balance + transation.getValue()
    }
  
  }

  

  export default UserAccount