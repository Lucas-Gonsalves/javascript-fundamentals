const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");

const guestName = document.createElement("span");
guestName.textContent = "Lucas";

// add after the last child
newGuest.append(guestName);

// add before the first child
//newGuest.prepend(guestName)

// more simple and accept just one argument
//newGuest.appendChild(guestName)

guests.append(newGuest);
