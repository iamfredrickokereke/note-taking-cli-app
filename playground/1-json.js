const fs = require('fs');

const book ={
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}

let bookJSON = JSON.stringify(book);


fs.writeFileSync('1-json.json', bookJSON);


// console.log(book);


// console.log(bookJson);

// let bookParsed = JSON.parse(bookJson);

// console.log(bookParsed);




