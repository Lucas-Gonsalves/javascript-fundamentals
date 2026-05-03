/* 
reduce(), used to recude an array for a unique value
  Params:
  - Original array (values)
  - Accumulator 
  - Current value (value of the interation)
  - Initial value (0)
  - Index (index of the current intaration - optional)
*/

const values = [1, 2, 3, 4, 5]
const sum = values.reduce((accumulator, currentValue, index) => {
  console.log('Accumulator: ', accumulator)
  console.log('Current value: ', currentValue)
  console.log('Idex: ', index)

  console.log('Soma: ', accumulator + currentValue)
  console.log('###########')
  
  return accumulator + currentValue
}, 0)

console.log('Result': sum)