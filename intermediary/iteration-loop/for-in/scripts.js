// FOR IN executes interaction of an object and travel properties

let person = {
  name: "Lucas",
  surname: "Gonçalves",
  email: "lucas@email.com"
}

let steps = 1

for (let property in person) {
  console.log(steps)

  // Displays the name of propertie
  console.log(property)

  // Displays the content of propertie
  console.log(person[property])

  steps++
}

let students = ["Lucas", "Anna", "Alan"]

for (let index in students) {
  console.log(students[index])
}