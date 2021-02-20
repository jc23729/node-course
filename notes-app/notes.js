const fs = require('fs')


// Create getNotes function that returns "Your notes..."


const getNotes = function(){
    return 'your notes....';
}
//dont have loadNotes file yet...
const addNote = function(title, body){
    const notes = loadNotes()
    //gonna push on an object with title and body properties
    //gonna use array filter method to check for duplicate notes
    // if return true, keep array or false
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken')
    }
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !=title
    })
}

}
// going to take an argument, its gonna take an array of notes
const saveNotes = function(notes){
    //stringify the data
    const dataJSON = JSON.stringify(notes)
    //save it to the file system, we're writing whatever is in that dataJSON file
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    // if it catches an error = e it will return an empty array
    }catch(e){
        return []
    }

}

// Macs-MBP:notes-app mac$ node app.js add --title="t" --body= "b"
// { _: [ 'add', 'b' ], title: 't', body: '', '$0': 'app.js' }
// Macs-MBP:notes-app mac$ node app.js add --title="t" --body="b"
// { _: [ 'add' ], title: 't', body: 'b', '$0': 'app.js' }
// Macs-MBP:notes-app mac$ node app.js add --title="List" --body="Sweater, Pants" 
// { _: [ 'add' ], title: 'List', body: 'Sweater, Pants', '$0': 'app.js' }
// Macs-MBP:notes-app mac$ 

//both of the functions can now be exported 
module.exports = {
    getNotes : getNotes,
    addNote : addNote
}