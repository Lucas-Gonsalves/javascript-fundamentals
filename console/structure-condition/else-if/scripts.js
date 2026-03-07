// If Else IF

let hour = 19;

if (hour <= 12) {
  console.log("Bom dia");
  
} else if (hour > 18) {
  console.log("Boa noite");

} else if (hour > 12) {
  console.log("Boa tarde.");
}

console.log("New condition");

if (hour <= 12) {
  console.log("Bom dia");

} else if (hour > 12 && hour <= 18) {
  console.log("Boa tarde.");

} else {
  console.log("Boa noite");
}
