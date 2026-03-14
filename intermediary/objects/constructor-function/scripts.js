function createProduct(name) {
  const product = {};

  product.name = name;
  
  product.details = function () {
    console.log(`The name of product is ${this.name}`);
  };

  return product;
};

// NEW create a new object utilizing the structure of constructor function
const product1 = new createProduct("Keyboard");

console.log(product1.name);
product1.details();

const product2 = new createProduct("mouse");
console.log(product2.name);
product2.details();

console.log(product1 === product2);

// examples of constructior functions available in javaScript itself
let myName = new String("Lucas");
console.log(myName);

let price = "40.6".replace(".", "");
console.log(price);

let date = new Date("2024-1-1");

function Person(name) {
  this.name = name;
  this.message = function () {
    console.log(`Hello, ${this.name}`);
  };
};

const person1 = new Person("Lucas");
console.log(person1.name);
product2.message();

const person2 = new Person("Jhon");
console.log(person2.name);
product2.message();