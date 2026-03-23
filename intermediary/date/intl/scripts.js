// Intl is an API of international of ECMAScript

// bring information of locality
let currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)

// display on locale format
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date = new Date()

// get difference in minutes of timezone
console.log(date.getTimezoneOffset())

// get difference in hours of timezone
console.log(date.getTimezoneOffset() / 60)