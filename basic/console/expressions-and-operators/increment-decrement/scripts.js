let number = 10;

// Increment
// number = number + 1
number++;

// After icrement (this is why don't shows in cosole)
console.log("Incremento após: ", number++); // ...11
console.log(number); // ...12

// Before increment
console.log(++number); // ...13

// Compound assignment operator
number += 10;
console.log(number); // ...23

// Decrement
let newNumber = 10;

newNumber--;

// After descrement (this is why don't shows in cosole)
console.log("Decremento após: ", newNumber--); // ...9
console.log(newNumber); // ...8

// Before decrement
console.log(--newNumber); // ...7

// Compound assignment operator
newNumber -= 10;
console.log(newNumber); // ...-3
