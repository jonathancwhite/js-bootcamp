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

const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const sortNotes = function (notes){
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }
        return 0
    })
}

sortNotes(notes)
console.log(notes)


// console.log(findNotes(notes, '2'))

// const note = findNote(notes, 'nnote 3')
// console.log(note)