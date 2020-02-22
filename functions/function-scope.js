// Global Scope (convertFahrenheitToCelsius)
  // Local Scope (result, temp)
    // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (temp) {
    let result = (temp - 32) * (5/9)

    if (result <= 0) {
        let isFreezing = true
    }

    return result
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))