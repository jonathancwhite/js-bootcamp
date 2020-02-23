const account = {
    name: 'Jonathan White',
    expenses: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    income: [],
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpenses = 0
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        let balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }

}

// -- CHALLENGE 2 -- //
// 1. add income array to account
// 2. setup add income method -> description, amount
// 3. Tweak gAS

// Jonathan White has a balance of $X. $X in income. $X in expenses.


// Expense -> description, amount
// addExpense(description, amount) -> new object & add to list
// getAccountSummary() -> total all expenses -> Jonathan White has $1250 in expenses.

account.addIncome('Freelance', 100)
account.addIncome('Job', 1000)
account.addExpense('Rent', 400)
account.addExpense('Food', 100)
console.log(account.getAccountSummary())