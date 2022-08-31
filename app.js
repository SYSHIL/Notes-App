
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
const notesutils = require('./notes.js')
// yargs.version('1.1.0')

yargs.command({
    command : 'add',
    describe : 'add a new note',
    builder : {
        title:{
            describe:'Note title',
            demandOption : true,
            type:'string' // our option is casted to string datatype 
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notesutils.addNote(argv.title,argv.body)
        
    }
})


// create remove command
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            describe : 'title of note to remove',
            demandOption : true, 
            type : 'string'
        }
    },
    handler(argv){
        notesutils.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command:'list',
    describe:'list notes contents',
    handler(){
        notesutils.listNotes()
    }
})
// create read command
yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe : 'title of note to read',
            demandOption : true, 
            type : 'string'
        }
    },
    handler(){
        notesutils.readNote(argv.title)
    }
})

console.log(yargs.argv)
