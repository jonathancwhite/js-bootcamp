// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(6)
let otherValue = square(8)
console.log(value)
console.log(otherValue)

// Challenge Area

//convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (temp) {
    let result = (temp - 32) * (5/9)
    return result
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))