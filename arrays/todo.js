// Create an array with five todos
// You have X todos
// Print first and second to last items -> Todo: walk the dog

const todo = ['Finish JavaScript Course', 'Start Ruby on Rails Course', 'Apply for more internships', 'Diversify my portfolio', 'Fix mobile site for portfolio']

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

// todo.splice(2, 1)
// todo.push('Howdy Yall')
// todo.shift()


const printNumOfTodo = function() {
    return `You have ${todo.length} todos`
}

     //////////////////////////////////
    //      HIS IMPLEMENTATION     //
   /////////////////////////////////

    /* todo.forEach(function (item, index) {
        const num = index + 1
        console.log(`${num}. ${item}`)
    }) */

// My implementation; I would have wrapped in a function called printTodo though
// Would make deleting something from the list with a method easier and decrimenting i
let i = 1

// my string could have been cleaner if I used import ${} instead of +
todo.forEach(function(item) {
    console.log(i + '. '+ item) 
    i++
})