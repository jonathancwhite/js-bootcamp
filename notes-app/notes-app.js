let notes = getSavedNotes();
const id = uuidv4();
const titleElement = document.querySelector('a');
const bodyElement = document.querySelector('#note-body');

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(event) {
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes);
    location.assign(`edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})