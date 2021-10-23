const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New title added'))
    }
    else {
        console.log(chalk.red.inverse('Duplicate title'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note)=>{
        return note.title != title
    })

    if (notes.length === filteredNotes.length) {
        console.log(chalk.red.inverse('No note found!'))
    }
    else{
        console.log(chalk.green.inverse('Note removed!'))
    }
    saveNotes(filteredNotes)
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach( (note) => {
        console.log('Title: ' + note.title)
        console.log('Body: ' + note.body)
        console.log('-------------------')
    });

}

const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find((note) => note.title === title)

    if (selectedNote) {
        console.log('Title: ' + selectedNote.title)
        console.log('Body: ' + selectedNote.body)
        console.log('-------------------')
    }
    else {
        console.log('Title not found!')
    }
    
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    
    } catch (e) {
        return []
    }    
}





module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}