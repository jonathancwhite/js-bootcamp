let todo = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
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
    saveTodos(todo);
    renderTodos(todo, filters);
    e.target.elements.newTodo.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    if (e.target.checked) {
        const filteredTodos = todo.filter(function(todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
        })

        document.querySelector('#todos').innerHTML = '';

        generateSummaryDOM();

        generateNoteDOM();
    }

    else {
        renderTodos(todo,filters);
    }
})