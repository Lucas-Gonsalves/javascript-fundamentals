window.addEventListener("load", () => {
  console.log("The page was loaded!");
});

addEventListener("click", (event) => {
  event.preventDefault();

  // return all event informations
  console.log(event);

  console.log(event.target);
});
