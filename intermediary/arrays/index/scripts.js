let fruits = ["Apple", "Banana", "Orange", "grape"];
console.log(fruits);

// finding index
let position = fruits.indexOf("Banana");

// error on finding
let positionWrong = fruits.indexOf("");

// remove 3 elements at the 1 index
// fruits.splice(1, 3);
// console.log(fruits);

// remove the banana 1 item os array
fruits.splice(position, 1);
console.log(fruits);
