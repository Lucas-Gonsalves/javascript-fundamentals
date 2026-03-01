// Arrow Function

const showMessage = () => {
  console.log("Hello");
};

console.log(showMessage);
console.log(showMessage());

const showMessage1 = (username, email) => {
  console.log(`Hello, ${username}. your email is: ${email}`);
};

console.log(showMessage1("Lucas", "luz@gmail.com"));
