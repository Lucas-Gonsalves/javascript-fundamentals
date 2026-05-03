// Rest Params (...) allow to represent an undefined argument like array

function values (a, ...rest) {
  console.log(a)
  console.log(...rest) // spreaded
  console.log(rest) // array 

  console.log(rest.length) // dinamic length

}

values(2, 1, 3)