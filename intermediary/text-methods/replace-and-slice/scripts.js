let message = "I am stodying the fundamentals of JavaScript";
console.log(message);

// replacing part of a text
console.log(message.replace("JavaScript", "HTML"));

// extract a part of string (start, end)
console.log(message.slice(6, 30))

// extract a part of string (end, start)
console.log(message.slice(-11))

// Remove spaces before and after a content of string
let textWithSpace = "   Text   with    space";
console.log(textWithSpace.length)
console.log(textWithSpace.trim().length)