// 1. Create new HTML file
// 2. An h1 and 5 p tags
// 3. Server that folder and view the doc in the browser

// 1. Create a link to a JavaScript file
// 2. remove all p tags that have "on" in the text

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function(todos) {
    if (todos.textContent.includes('on')) {
        todos.remove()
    }
})