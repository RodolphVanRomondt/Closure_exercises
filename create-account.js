function createAccount(pin, amount = 0) {
    let accPin = pin;
    let accAmount = amount;

    return {
        checkBalance(inputPin) {
            return inputPin === accPin ? `$${accAmount}` : "Invalid PIN.";
        },
        deposit(inputPin, amount) {
            if (inputPin === accPin) {
                accAmount += amount;
                return `Succesfully deposited $${amount}. Current balance: $${accAmount}.`;
            }
            return "Invalid PIN.";
        },
        withdraw(inputPin, amount) {
            if (inputPin !== accPin) return "Invalid PIN.";
            if (amount > accAmount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            accAmount -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${accAmount}.`;
        },
        changePin(oldPIN, newPIN) {
            if (oldPIN !== accPin) return "Invalid PIN.";
            accPin = newPIN;
            return "PIN successfully changed!";
        }
    };
}


module.exports = { createAccount };
