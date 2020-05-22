const book ={
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}

console.log(book);

let bookJson = JSON.stringify(book);

console.log(bookJson);

let bookParsed = JSON.parse(bookJson);

console.log(bookParsed);
