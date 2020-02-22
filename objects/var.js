// actively avoid var
// depreciated

// var firstName = 'Jonathan'
// firstName = 234
// firstName = 'Christian'

// var firstName = 'Welcome to a problem'
// Accepts even though it might not be what you want

// var is function scoped not block scope
// you can access var from anywhere but not let or const
// if declared in function, it can't be accessed outside
age = 10
console.log(age)
var age
console.log(age)

// declaration hoisted to top (var age ^)