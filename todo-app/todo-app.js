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
    searchText: '',
    hideCompleted: false
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
    summary.textContent = `You have ${filteredTodos.length} total todos`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function(todo) {
        const todoElement = document.createElement('p');
        todoElement.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoElement);
    })
}

renderTodos(todo, filters);

document.querySelector('#search-todo').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todo, filters);
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    todo.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })
    renderTodos(todo, filters);
    e.target.elements.newTodo.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    // console.log(e.target.checked);
    filters.hideCompleted = e.target.checked;
    if (e.target.checked) {
        const filteredTodos = todo.filter(function(todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
        })

        document.querySelector('#todos').innerHTML = '';

        const summary = document.createElement('h2');
        summary.textContent = `You have ${filteredTodos.length} todos left`;
        document.querySelector('#todos').appendChild(summary);

        filteredTodos.forEach(function(todo) {
            const todoElement = document.createElement('p');
            todoElement.textContent = todo.text;
            document.querySelector('#todos').appendChild(todoElement);
        })
    }

    else {
        renderTodos(todo,filters);
    }
})