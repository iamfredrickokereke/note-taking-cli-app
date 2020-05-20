const book ={
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}

let bookJson = JSON.stringify(book);

let bookParsed = JSON.parse(bookJson);