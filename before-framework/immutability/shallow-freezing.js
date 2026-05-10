const book = {
  title: 'immutabily objects',
   category: 'JavaScript',
  author: {
    name: 'Lucas',
    email: 'lucas@email.com'
  }
}

// book.category = 'HTML'
// console.log(book)

Object.freeze(book)
book.category = 'CSS'
console.log(book)

book.author.name = 'John'
console.log(book)
