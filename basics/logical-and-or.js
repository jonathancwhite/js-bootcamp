let temp = 125

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

if (temp >= 60 && temp <=90) {
    console.log('It is a beautiful day!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Do whatever you want')
}

// Challenge Area

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes
// At least one guest vegan? Make sure to offer up some vegan options.
// Else, offer anything on the menu 

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer anything on the menu')
}
