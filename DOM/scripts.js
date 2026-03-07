// view doocument content
console.log(document);

// get the title of page
console.log(document.title);

// get element by id
const guest = document.getElementById("guest-1");

console.log(guest);
console.dir(guest);

// get elements by class
const guestByClass = document.getElementsByClassName("guest");
console.log(guestByClass.item(0));
console.log(guestByClass[1]);

// get elements by tag name
const guestByTag = document.getElementsByTagName("li");
console.log(guestByTag);
