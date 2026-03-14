let content = null;
let content2 = undefined;
let content3 = "test";


// if is undefined or null the "default content" is displayed else teh content is displayed
console.log(content ?? "Default content");
console.log(content2 ?? "Default content");
console.log(content3 ?? "Default content");


// example of uyse
const user = {
  name: "Lucas",
  picture: undefined,
};

console.log(user.picture ?? "default.png")