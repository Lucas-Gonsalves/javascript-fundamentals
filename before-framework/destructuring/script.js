// Destructuring assignment allow to extract array data or objects in distinct variables
const data = ['Jhon Doe', 'jhon@email.com']

// destructuring array
const [ userName, email ] = data
console.log(userName)
console.log(email)

// Destructuring only the first position
const fruits = ['Banana', 'Apple', 'Orange']
const [ firstFruit ] = fruits
console.log(firstFruit)

// Destructuring only the second position
const [ , secondFruit ] = fruits
console.log(secondFruit)

// Destructuring only the tirth position
const [ ,, thirdFruit ] = fruits
console.log(thirdFruit)
