// Every() test if all elements of the array oass ubti a condition an return a boolean value

const values = [1, 4, 5, 6, 7, 18, 20, 39]

// verify if all is above 18
const result = values.every((value) => value >= 18)
console.log(result) // false