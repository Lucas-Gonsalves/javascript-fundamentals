const address1 = {
  street: 'Av. Brasil',
  number: 20,
}

const address2 = address1  // this is a reference of the object address1
// address2.number = 30 changes the address1

console.log(address1, address2)  // same

// solution one
const address3 = { ...address1 }  // this is a copy (different objects)
address3.number = 30  // changes the object address3

console.log(address3)

// solution two
const address4 = { ...address1, number: 30 }  // copy and changes the property
const address5 = { number: 30, ...address1, }  // wrong! does not change

console.log(address4, address5)


// array example
const list1 = ['apple', 'banana']
const list2 = list1  // this is a reference of the object address1

list2.push('watermelon')  // changes the list1

console.log(list1, list2)

// solution one
const list3 = [ ...list1 ]
list3.push('watermelon')  // changes the list3

const list3 = [ ...list1, 'watermelon' ]

console.log(list3)
