const validator = require("validator")

const getNotes = require('./notes.js');

const msg = getNotes()

// console.log(validator.isEmail('example.com'));

console.log(validator.isUrl('http://google.com'));







