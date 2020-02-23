const notes = [{}, {
    title: 'Note 1',
    body: 'This is a note',
}, {
    title: 'Note 2',
    body: 'I like encapsulation'
}, {
    title: 'Note 3',
    body: 'I need to go to the gym'
}]

// console.log(notes.pop())
// notes.push('Note 4')

// console.log(notes.shift())
// notes.unshift('Note 0')

// notes.splice(1, 1, 'Note 2')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function(){
//     console.log('testing 123')
// })

console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function(note, index) {
    return note.title === 'Note 3'
})

console.log(index)