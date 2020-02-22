const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('Note 4')

// console.log(notes.shift())
// notes.unshift('Note 0')

notes.splice(1, 1, 'Note 2')

notes[2] = 'This is now the new note 3'

console.log(notes.length)
console.log(notes)