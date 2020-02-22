// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
// console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 2000)
console.log(scoreText)

// Challenge Area
let getTip = function (total, tipPercent = .20) {
    let tipAmmount = total * tipPercent
    let tipPercFormatted = tipPercent * 100
    return `A ${tipPercFormatted}% tip on a $${total} bill would be $${tipAmmount}.`
}

let tip = getTip(60)
console.log(tip)