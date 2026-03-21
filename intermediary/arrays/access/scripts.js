let myArray = [
  "A text",
  10,
  true,
  function() {
    console.log(": )");
  },
  {
    name: "Lucas",
    email: "lucas.@gmail.com"
  }
]

// Text
console.log(myArray[0])

// Number
console.log(myArray[1])

// Boolean
myArray[3]()

// Object
console.log(myArray[4].name, myArray[4].email)