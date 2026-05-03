// Destructuring assignment allow to extract array data or objects in distinct variables

const product = {
  description: 'Keyboard',
  price: 150,
}

const { description, price } = product
console.log(description, price)

function newProduct({description, price}) {
  console.log('#### NEW PRODUCT ####')
  console.log(description, price)
}

const productTwo = {
  description: 'Mouse', 
  price: 70 
}

newProduct(productTwo)