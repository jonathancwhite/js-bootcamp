// Fetch existing todos from localStorage
const getSavedTodos = function() {
    const todoJSON = localStorage.getItem('todo')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON);
    } else {
        return [];
    }
}

// Save todos to localStorage 
const saveTodos = function(todo) {
    localStorage.setItem('todo', JSON.stringify(todo));
}

// Render application todos based on filters
const renderTodos = function(todo, filters) {
    const filteredTodos = todo.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    })

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach(function(todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
    const todoContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoElement = document.createElement('span');
    const remove = document.createElement('button');

    // Set type for button to checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoContainer.appendChild(checkbox);    

    // Gives title to elements in span
    todoElement.textContent = todo.text;
    todoContainer.appendChild(todoElement);
    
    // Creates todo element and remove button
    remove.textContent = 'Delete';
    todoContainer.appendChild(remove);

    return todoContainer;
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} total todos`;
    return summary;
}