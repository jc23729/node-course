const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//customize yargs version

//Create add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler: function handler(argv) {
        console.log('Title:', + argv.title);

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