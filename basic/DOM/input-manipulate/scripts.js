const input = document.querySelector("input");
const form = document.querySelector("form");

const regex = /\D+/g;

input.addEventListener("input", () => {
  const value = input.value;

  if(!regex.test(value)) {
    alert("Pattern not founded");
  }

  //console.log(value.match(regex)); return pattern of string

  //const isValid = regex.test(value); test if it met the standard
  //console.log(isValid);


});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value.replace(regex, "");
  console.log(value);
});
