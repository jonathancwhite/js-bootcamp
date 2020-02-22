let name

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value
let square = function (num) {
    let result = num * num
    return result
}

console.log(square())

// Null as assigned value
let age = 27
age = null // Explicitely cleared; Undefined is js default

console.log(age)