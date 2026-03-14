// get elements by query ID
const guest = document.querySelector("#guest-1");

// return content like text (and invisible)
console.log(guest.textContent);

// only return the visible content
console.log(guest.innerText);

// return the HTML like text
console.log(guest.innerHTML);
