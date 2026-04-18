class MyCustomError {
  constructor(message) {
    this.message = `Error Class Customized: ${message}`
  }
}

try  {
  throw new MyCustomError("Error customized releazed")
  
} catch (error) {
  if(error instanceof MyCustomError) {
    console.log(error.message)
  } else {
    console.log("Unavaible to execute.")
  }
}