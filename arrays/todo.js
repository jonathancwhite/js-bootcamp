const todo = ['Finish JavaScript Course', 'Start Ruby on Rails Course', 'Apply for more internships', 'Diversify my portfolio', 'Fix mobile site for portfolio']

const printNumOfTodo = function() {
    return `You have ${todo.length} todos`
}

todo.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`) 
})