let myAccount = {
    name: 'Jonathan White',
    expenses: 0,
    income: 0
}

// reference to the exact same object - myAccount is a pointer to the object
// changing account will also change myAccount bc it is a pointer
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome - Create on your own challenge
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

// resetAccount - Create on your own challenge
let resetAccount = function (account) {
    account.income = 0,
    account.expenses = 0
}

// getAccountSummary - Create on your own challenge
// Account for Jonathan has $900. $1000 in income. $100 in expenses
let getAccountSummary = function (account){
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 200)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))