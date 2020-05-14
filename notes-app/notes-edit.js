// 1. Add a DOM element between the title and body inputs (empty span)
// 2. Set a text value: Last Edited 4 Hours Ago - moment().fromNow()
// 3. Update value on title/body/storage change

const titleElement = document.querySelector('#note-title');
const timestampElement = document.querySelector('#timestamp');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);

let notes = getSavedNotes();
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
timestampElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', function(event){
    note.title = event.target.value;
    note.updatedAt = moment().valueOf();
    timestampElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
})

bodyElement.addEventListener('input', function(event){
    note.body = event.target.value;
    note.updatedAt = moment().valueOf();
    timestampElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
})

removeElement.addEventListener('click', function(event){
    removeNote(note.id);
    saveNotes(notes);
    location.assign('index.html');
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('index.html');
        }
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
        timestampElement.textContent = generateLastEdited(note.updatedAt);
    }
})