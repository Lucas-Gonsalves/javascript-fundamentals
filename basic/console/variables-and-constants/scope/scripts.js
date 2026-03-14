// console.log(user); ...undefined
// var user = "Lucas";

// Hoisting
// var user;
// console.log(user);

var email = "lucasluz@gmail.com";

{
  console.log(email);
}

{
  var age = 18;
}

console.log(age);

let addres = "xxxxx";

{
  addres = "yyyyy";
  console.log(addres);
}
