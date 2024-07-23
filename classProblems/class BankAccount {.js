class BankAccount {
    constructor(accountNumber, balance) {
        this._accountNumber = accountNumber;
        this._balance = balance;
    }

    // method for deposit the amount
    deposit(amount) {
        if (amount <= 0) {
            return "amount must be greater than 0";
        }
        this._balance += amount;
        return `successfully deposited ${amount}.`;
    }

    // method for withdrawal of the amount
    withdraw(amount) {
        if (amount <= 0) {
            return "invalid withdrawal";
        }
        if (amount > this._balance) {
            return "insufficient balance";
        }
        this._balance -= amount;
        return `successfully withdrew ${amount}.`
    }


    checkBalance() {
        return this._balance;
    }
}

//create bankaccount with initial balance 5k
let account1 = new BankAccount("123xyz", 5000);

console.log(account1.deposit(500));
console.log(account1.withdraw(0));
console.log(account1.withdraw(15000));
console.log(account1.withdraw(2000));

// Check balance 
console.log(`current balance for account number ${account1._accountNumber}: ${account1.checkBalance()}`);