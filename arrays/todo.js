const todos = ['Finish JavaScript Course', 'Start Ruby on Rails Course', 'Apply for more internships', 'Diversify my portfolio', 'Fix mobile site for portfolio']

// const printNumOfTodo = function() {
//     return `You have ${todo.length} todos`
// }

// todo.forEach(function(item, index) {
//    console.log(`${index + 1}. ${item}`) 
// })

// 1. Switch to array of objects -> text, completed (boolean)
// 2. Create function to remove a todo by text value

const todo = [{
    text: 'Finish JavaScript course',
    completed: false
},{
    text: 'Start Ruby on Rails Course',
    completed: false
},{
    text: 'Apply for internships',
    completed: true
},{
    text: 'Diversift Portfolio',
    completed: false
},{
    text: 'Mobile optimization for Portfolio',
    completed: false
}]

const sortTodo = function(todo) {
    todo.sort(function(a, b) {
        if (a.completed) {
            return 1
        } else if (!a.completed) {
            return -1
        }
    })
}

let working = false;

const deleteTodo = function (todo, todoText) {
    const index = todo.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todo.splice(index, 1)
    }
}

const getThingsTodo = function(todo){
    return todo.filter(function(todo){
        return !todo.completed
    })
}

sortTodo(todo)
console.log(todo)

//console.log(getThingsTodo(todo))

// deleteTodo(todo, '!Start Ruby on Rails Course')
// console.log(todo)