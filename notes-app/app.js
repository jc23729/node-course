// const validator = require("validator")

const getNotes = require('./notes.js');

const msg = getNotes()

const chalk = require('chalk');

// console.log(validator.isEmail('example.com'));

// console.log(validator.isUrl('http://google.com'));

const greenMsg = chalk.red('Error')
console.log(greenMsg)


// or console.log(chalk.green('Success!'));



