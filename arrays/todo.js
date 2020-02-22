// Create an array with five todos
// You have X todos
// Print first and second to last items -> Todo: walk the dog

let todo = ['Finish JavaScript Course', 'Start Ruby on Rails Course', 'Apply for more internships', 'Diversify my portfolio', 'Fix mobile site for portfolio']

const printNumOfTodo = function() {
    return `You have ${todo.length} todos`
}


console.log(printNumOfTodo())
// could have created a printTodoAtIndex() method to do the bottom two
console.log('Todo: ' + todo[0])
console.log('Todo: ' + todo[todo.length - 2])