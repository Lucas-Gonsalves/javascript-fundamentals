// Find(), return the value of the first element of the array that satisfies the condition
// otherwise, undefined is returned.

const values = [5, 1, 2, 130, 8, 44]
const valueFinded = values.find(value => value > 5)

console.log(valueFinded) // 130


const fruits = [
  { name: 'Banana', price: 150 },
  { name: 'Orange', price: 10 },
  { name: 'Berry', price: 90 },
]

const fruitFinded = fruits.find(fruit => fruit.name === 'Banana')
console.log(fruitFinded) // { name: 'Banana', price: 150 }