const notes = [{
    title: 'Note 1',
    body: 'This is a note',
}, {
    title: 'Note 2',
    body: 'I like encapsulation'
}, {
    title: 'Note 3',
    body: 'I need to go to the gym'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'note 3')
console.log(note)