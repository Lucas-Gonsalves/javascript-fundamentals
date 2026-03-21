// WHILE: Executes until it is true.

let execute = true

while(execute) {
  response = window.prompt("want to continue [1] yes [2] no")

  if(response === "2") {
    execute = false
  }
}

console.log('folow the flow...')