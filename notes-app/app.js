const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//customize yargs version

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function handler() {
        console.log('Adding a new note')

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
// 2. Setup command to support read command and print the placeholder message for now
// 3. Test your work by running both commandsto ensure output


console.log(yargs.argv)