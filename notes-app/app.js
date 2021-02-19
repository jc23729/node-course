const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//customize yargs version
// Commands that we created
// Commands:
//   app.js add     Adding a new note
//   app.js remove  Remove a note
//   app.js list    List your notes
//   app.js read    Read a note

// Options:
//   --help     Show help                                                 [boolean]
//   --version  Show version number                                       [boolean]
// Macs-MBP:notes-app mac$ 

//Create add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string',
        }
    },
    handler: function handler(argv) {
        notes.addNote(argv.title, argv.body);

    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function handler() {
        console.log('Removing a note')
    }
})
// //Challenge: Add two new commands
// 1. Setup command to support "list" command print placeholder message for new
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function handler() {
        console.log('Listing out all notes')
    }
})
// 2. Setup command to support read command and print the placeholder message for now
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function handler() {
        console.log('reading out all notes')
    }
})
// 3. Test your work by running both commandsto ensure output


console.log(yargs.argv)