const notes = [{
    title: 'Sample Note',
    body: 'This is a note',
}, {
    title: 'Laziness',
    body: 'I like gym'
}, {
    title: 'Reminder',
    body: 'I need to go to the gym'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function(note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(event) {
    event.target.textContent = 'The button was clicked';
})

document.querySelector('#remove-all').addEventListener('click', function(event) {
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
})

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
})