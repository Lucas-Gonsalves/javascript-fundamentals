let obj = [17]
let index = 300

try {
  obj.execute()
} catch (error) {
  if(errpr instanceof TypeError) {
    console.log("Method unavailable")
  }
  // console.log(error)
}

try {
  if(!obj.includes(17)) {
    throw new Error("17 is unavailable")
  }

  if (index > 99) {
    throw new RangeError("Number is out of interval. Choose a number between 0 to 99")
  }

} catch (error) {
  if(errpr instanceof TypeError) {
    console.log("Method unavailable")
  } else if (error instanceof RangeError) {
    console.log(error.message)
  } else {
    console.log("Error generic")
  }
}