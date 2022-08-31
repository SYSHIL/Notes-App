const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    // will get a note saved in our note
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>{
        return note.title === title 
    })

    debugger

    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
    }
    else{
        console.log(chalk.bgRedBright("note already taken!"))
    }
   
}


const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}



const loadNotes = ()=>{

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }   
    
}


const removeNote = (title)=>{

    const notes = loadNotes()
    trimmedNotes = notes.filter((element)=>{
        return element.title !== title
    })
    // use chalk to provide useful logs for remove
    if(trimmedNotes.length==notes.length){
        console.log(chalk.red("No note found !"))
        
    }else{
        saveNotes(trimmedNotes)
        console.log(chalk.greenBright("Note removed !"))
    }
}
const listNotes=()=>{
    notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.bgBlueBright(note.title))
        console.log(chalk.blue(note.body))
        console.log("\n")
    });
}
const readNote=(title)=>{
    notes = loadNotes()
    let found = false
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log(chalk.bgBlueBright(note.title))
        console.log(chalk.inverse(note.body))
    }
    else{
        console.log(chalk.red.inverse("Note not found !"))
    }
}
module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}













