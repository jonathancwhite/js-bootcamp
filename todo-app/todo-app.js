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

const incompleteTodos = todo.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todo.forEach(function(todo) {
    const newTodo = document.createElement('p')
    newTodo.textContent = todo.text
    document.querySelector('body').appendChild(newTodo)
})

