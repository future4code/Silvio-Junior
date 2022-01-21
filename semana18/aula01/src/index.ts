/* 

1. a)

O constructor serve para possibilitar a criação de instâncias da classe, dizendo os parâmetros que devem ser passados para a 
criação da mesma. Para chamá-lo, basta executar: const insancia: Classe = new Classe(parametros).

b) 

Apenas uma vez.

c)

Criando Metodos (getters) específicos para a leitura das propiedades.


*/

import Bank from "./data/Bank/Bank";
import Transactions from "./data/Transactions/Transactions";
import UserAccount from "./data/UserAccont/UserAccount";

const user: UserAccount = new UserAccount("02564067158", "silvio", 25);
const transation: Transactions = new Transactions("Tranferêcia", 15000, "16/02/1997");
user.setTransactions(transation)
const bank: Bank = new Bank();
bank.setAccounts(user)
console.log('contas:', bank.getAccounts())
console.log('conta do usuário:',bank.getUserAccount(user))

