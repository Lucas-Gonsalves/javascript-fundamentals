const input = document.querySelector("input")

// keypress - when a key is pressed (capture all, including CTRL, SHIFT, etc...)
input.addEventListener("keydown", (event) => {
  console.log(event.key);
});

// keypress - when a key of type character is pressed (letters, numbers, dots, etc)
input.addEventListener("keypress", (event) => {
  console.log(event);
});

input.onchange = () => {
  console.log("O INPUT MUDOU");
};
