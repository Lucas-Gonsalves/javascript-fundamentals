const ul = document.querySelector("ul");

ul.addEventListener("scroll", (event) => {
  if (ul.scrollTop > 300) {
    console.log("End of the list");

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click in the button");
});
