const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("You submited the form. #1");
};

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("You submited the form. #2");
};


form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("You submited the form. #3");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("You submited the form. #4");
});
