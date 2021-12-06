import UserAccount from "../UserAccont/UserAccount"

class Bank {
    private accounts : UserAccount[] = []

    getUserAccount(userAcc: UserAccount){
        const user = this.accounts.filter((acc: UserAccount)=>{
            return userAcc === acc
        })

        return user
    }

    getAccounts(): UserAccount[] {
        return this.accounts
    } 

    setAccounts(acc: UserAccount){
        this.accounts.push(acc)
    }
}

export default Bank