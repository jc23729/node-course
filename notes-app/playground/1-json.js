const fs = require('fs');

// const book ={
//     title: "Ego is the enemy",
//     author: 'Ryan Holiday'
// }


// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)


// Load and parse the json data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

// Change the name of age property using your info
user.name = 'John'
user.age = 38

// Stringify the changed object and overwrite the origonal data
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
// Test your work by viewing data in Json File
