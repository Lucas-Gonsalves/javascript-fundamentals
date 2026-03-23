let date = new Date("2024-07-02T14:30:10")

// to aways have two digits formater
console.log(date.getDate().toString().padStart(2, "0"))

// to have mounth 1-12 formater
let month = (date.getMonth() + 1).toString().padStart(2, "0")
console.log(month)

let year = date.getFullYear()
let hours = date.getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} time ${hours}:${minutes}`)