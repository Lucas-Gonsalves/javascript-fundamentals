class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoice() {
    console.log("Some generic sound of animal")
  }
}

class Dog extends Animal {}
const dog = new Dog("Belu")
console.log(dog.name)
dog.makeNoice()


class Cat extends Animal {}
const cat = new Cat("Honey")
console.log(cat.name)
cat.makeNoice()