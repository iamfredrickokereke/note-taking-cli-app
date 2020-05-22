const fs = require('fs');

const book ={
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}

let bookJSON = JSON.stringify(book);

//Create and store json file
// fs.writeFileSync('1-json.json', bookJSON);

//Read Json file

let file = fs.readFileSync('1-json.json', null, Buffer)

file = file.toString();

console.log(file);


// console.log(bookJson);

// let bookParsed = JSON.parse(bookJson);

// console.log(bookParsed);




