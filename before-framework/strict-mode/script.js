// The Strict mode: Activating this mode errors that was silent begin to generate 
// exception to JavaScript

'use strict' // Can be used in all types of scopes

function showMessage() {

  let personName = 'Lucas'
  
  // personName = 'Lucas' because the use strict is active this will cause an error
  
  console.log('Heelo', personName)
}

class Student {
  get point() {
    return 7
  }
}

let student = new Student()

// student.point = 10  This also will cause an error
console.log(student.point)

// delete window.document  Error too (LOL)

/* Duplicate params also will generate an error
function sum (a, a, c) {
  return a + a + c
}
const result = sum(1, 3, 2)  // 3 + 3 + 2 = 8
console.log(result)
*/