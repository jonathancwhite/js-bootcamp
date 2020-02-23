const notes = [{
    title: 'Note 1',
    body: 'This is a note',
}, {
    title: 'Note 2',
    body: 'I like gym'
}, {
    title: 'Note 3',
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



console.log(findNotes(notes, '2'))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'nnote 3')
// console.log(note)