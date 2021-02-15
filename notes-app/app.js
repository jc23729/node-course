//require function is how we load things in/ modules
const fs = require('fs')

//fs.writefileSync take in two arguments both are strings, name of file, and then the data to write
fs .writeFileSync('notes.txt', 'My name is John.')