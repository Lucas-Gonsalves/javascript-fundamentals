const creditCart = "1234567812544928";

console.log(creditCart.length);

// take the last for digits
const lastDigits = creditCart.slice(-4);
console.log(lastDigits);

// padStart fill the string from the begining
const maskedNumber = lastDigits.padStart(creditCart.length, "*");

// padEnd fill the string at the end
const number = "123";
console.log(number.padEnd(10, "#"));
