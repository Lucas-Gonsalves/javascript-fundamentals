// spread, allows to an iterable object likely a expression of array or a string 
// be expanded for be used where zero or more arguments

const numbers = [1, 2, 3]
console.log(numbers)

console.log(...numbers) // spread

const data = [ // using with objects
  {
    name: 'example',
    email: 'example@email.com'
  },
  {
    name: 'example',
    email: 'example@email.com'
  },
  {
    name: 'example',
    email: 'example@email.com'
  },
]

console.log(data)
console.log(...data)