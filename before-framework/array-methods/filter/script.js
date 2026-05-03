// Filter Method. Create a new array with all elements that pass in a condition

const words = [ 'JavaScript', 'HTML', 'CSS', 'Web', 'TypeScript' ]

const result = words.filter(word => word.length > 3)

const products = [
  { id: Math.random(), description: 'Keyboard', price: 150, promotion: true},
  { id: Math.random(), description: 'Mouse', price: 70, promotion: true},
  { id: Math.random(), description: 'Monitor', price: 100, promotion: false},
]

// filter of promotional products
const promotionProducts = products.filter(product => product.promotion)
console.log(promotionProducts)