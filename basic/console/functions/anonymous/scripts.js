// Anonymous function (a function with don't have name)

const showMessage = function () {
  return "Hello Lucas";
};

console.log(showMessage());

const showMessage2 = function (message, name) {
  return (message, name);
};


console.log(showMessage2("Hello, ", "Lucas"));
