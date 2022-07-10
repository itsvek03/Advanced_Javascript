// house
this.house = 'Kim'
this.name = 'Vivek'

// let person = {
//   name: 'Vivek',
//   getName() {
//     console.log(`Person name is ${this.name}`)
//     console.log(`Person age is ${this.age}`)
//   },
// }

// const cleanTable = function () {
//   console.log(`${this.house}`)
// }
// cleanTable()

// person.getName()

// const cleanTable = function () {
//   const cleanInnerFunction = () => {
//     console.log(`Hello Inner function : ->${this.house}  ${this.name}`)

//     const cleanDeepFunction = () => {
//       console.log(`Hello Deep function : ->${this.house} ${this.name}`)
//     }
//     cleanDeepFunction()
//   }

//   cleanInnerFunction()
// }

// cleanTable()

// const cleanTable = function () {
//   const cleanInnerFunction = function () {
//     console.log(`Hello Inner function : -> ${this.house}  ${this.name}`)
//     const cleanDeepFunction = function () {
//       console.log(`Hello Deep function : ->${this.house} ${this.name}`)
//     }
//     cleanDeepFunction()
//   }
//   cleanInnerFunction()
// }

// cleanTable()

// this in prototype
this.table = 'Window Table'

let createRoom = function (soap) {
  this.soap = soap
}

createRoom.prototype.cleanTable = function (table) {
  console.log(`${table} using ${this.soap}`)
}
const r1 = new createRoom('Margo')
r1.cleanTable('new table')
