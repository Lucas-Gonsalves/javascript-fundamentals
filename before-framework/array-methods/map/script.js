// Iterates over the original array, calls a callback function for each element, and 
// returns a new array containing the results of each call.

const products = [ 'keyboard', 'mouse', 'monitor' ]

// iterates over the array elements
products.map((product) => {
  console.log(product)
})

// concise sintax
products.map((product) => console.log(product))

// using the new returned object
const formatted = products.map((product) => {
  // return product.toUpperCase()
  return {
    id: Math.random(),
    description: product,
  }
})

console.log(formatted)