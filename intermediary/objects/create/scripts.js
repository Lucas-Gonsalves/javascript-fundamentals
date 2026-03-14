// create a empty object
const obj = {};
console.log(obj);
console.log(typeof obj);

// create a object with properties and methods
const user = {
  email: "lucas@email.com",
  age: 18, 
  name: {
    first_name: "Lucas",
    lastName: "Gonçalves",
  },
  addres: {
    street: "x",
    number: "sn",
    city: "São paulo",
    postal_code: "12345-2123",
  },
  message: () => {
    console.log("Oi Lucas.")
  },
};

// accessing properties and methods using dot notation
console.log(user.email);

// accessing properties of objects
console.log(user.name.first_name);

// executing method of object
user.message();

// bracket notation
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]();
