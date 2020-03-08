const todo = [{
    text: 'Finish JavaScript course',
    completed: false
},{
    text: 'Start Web Development Bootcamp Course',
    completed: true
},{
    text: 'Apply for internships',
    completed: true
},{
    text: 'Diversify Portfolio',
    completed: false
},{
    text: 'Mobile optimization for Portfolio',
    completed: false
},{
    text: 'Finish BlAck Forezt Website',
    completed: true
}]

const filters = {
    searchText: ''
}

const renderTodos = function(todo, filters) {
    const filteredTodos = todo.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    })

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function(todo) {
        const todoElement = document.createElement('p');
        todoElement.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoElement);
    })
}

renderTodos(todo, filters);

// todo.forEach(function(todo) {
//     const newTodo = document.createElement('p');
//     newTodo.textContent = todo.text;
//     document.querySelector('#todos').appendChild(newTodo);
// })

const createTodo = function(todo) {
    // access todo array and add value
}

document.querySelector('#add-todo').addEventListener('click', function(e){
    // create new todo
    createTodo(todo);
})

document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value);
})

document.querySelector('#search-todo').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todo, filters);
})