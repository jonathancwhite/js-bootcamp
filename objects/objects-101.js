let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area

let person = {
    age: 22,
    name: 'John Doe',
    location: 'Citytown, CA'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = 24  // Could also add with person.age + number

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)