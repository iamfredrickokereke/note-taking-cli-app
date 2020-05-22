const book ={
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}

console.log(book);

let bookJson = JSON.stringify(book);

let bookParsed = JSON.parse(bookJson);