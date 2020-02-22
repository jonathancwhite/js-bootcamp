let name = '  Jonathan White  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower cae
console.log(name.toLowerCase())

// Includes method
let password = 'abc12356789098'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())
// works just like java name.trim().toUpperCase() works


// Challenge Area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

// output
console.log(isValidPassword('asdf'))
console.log(isValidPassword('abc1234&*^%'))
console.log(isValidPassword('password98837t17t'))
