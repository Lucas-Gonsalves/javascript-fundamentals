/*
  - Parameter: is a variable (scope of function) that will receive a value in a function. 
  - Arguments: is the value that is passed for the function
*/

function message(username) {
  console.log("Hello,", username);
}

message("Lucas");
message("Ana");

function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);
sum(7, 3);

// Defining a value (argument) default.
function joinText(text1, text2 = "", text3 = "") {
  console.log(text1, text2, text3);
}

joinText("Lucas", "Gonçalves", "Luz");
joinText("Gonçalves", "Luz", "Lucas");
joinText("Gonçalves");
