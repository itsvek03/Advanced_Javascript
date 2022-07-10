'use strict'

var firstPerson = { firstName: 'John', lastName: 'Rodson' }
var secondPerson = { firstName: 'Jimmy', lastName: 'Baily' }

function callDemo(_age, _location) {
  return `My FirstName is ${this.firstName} and last name is ${this.lastName}. My age is ${_age} and location is ${_location}`
}
// // How to access the name
// callDemo.call(firstPerson, 32, 'Mumbai')
// callDemo.call(secondPerson, 28, 'UP')

// apply

// callDemo.call(firstPerson, [32, 'Mumbai'])
// callDemo.call(secondPerson, [28, 'UP'])

// bind

// const f1 = callDemo.bind(firstPerson, 32, 'Mumbai')
// const f2 = callDemo.bind(secondPerson, 28, 'UP')
// console.log(f1())
// console.log(f2())
