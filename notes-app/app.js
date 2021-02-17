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



console.log(yargs.argv)