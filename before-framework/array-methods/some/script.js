// Some(), test if 'at least' one of the elements in array pass to the condition and
// retrun a boolean value

const ages = [1, 4, 5, 6, 7, 18, 20, 39]

const result = ages.some((age) => age < 18)
console.log(result) // true
