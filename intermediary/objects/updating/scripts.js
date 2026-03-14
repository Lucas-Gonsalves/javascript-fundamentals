const product = {
  name: "Keyboard",
  quantity: 100,
};



// updating the value of propertie 
console.log(product.quantity);
product.quantity = 90;
console.log(product.quantity);

console.log(product.name);
product.name = "Mouse";
console.log(product.name);

// bracket notation
product["quantity"] = 50;
console.log(product);
