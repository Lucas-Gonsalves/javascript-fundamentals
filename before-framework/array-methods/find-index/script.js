// Returns the index of the first element in the array that satisfies the condition. 
// Otherwise, returns -1.

const values = [4, 6, 8, 12]
let indexValue = values.findIndex(value => value === 4)

console.log(indexValue)
console.log(values[indexValue])

// example in case it not found
indexValue = values.findIndex(value => value > 100)
console.log(indexValue) // -1

