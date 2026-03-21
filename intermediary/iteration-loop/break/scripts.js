// break encerrates the execution of repitition or switch to follow for next struction

let option = 3

/*
switch(option) {
  case 1:
    console.log("Register")
    break
  
  case 2:
    console.log("Register")
    break

  case 3:
    console.log("Register")
    break

  default: 
    console.log("Invalid option")
    break
}
*/

// utilizing the break to end a repitition
for(let i = 0; i < 10; i++) {
  if(i === 3) {
    break
  }
  console.log(i)
} 