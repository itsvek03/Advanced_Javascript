function area(radius) {
  return Math.PI * radius * radius
}

const arr = [1, 2, 3, 4]
console.log(arr.map(area))

// Now make polyfill for map

// function calculate(array, type) {
//   let output = []
//   for (let index = 0; index < array.length; index++) {
//     output.push(type(array[index]))
//   }
//   return output
// }

// console.log('Calculate :->', calculate(arr, area))

// Now make polyfill for calculate
// First make calculate function as array type

Array.prototype.calculate = function (type) {
  let output = []
  for (let index = 0; index < this.length; index++) {
    output.push(type(this[index]))
  }
  return output
}

// this represents the arr var
// because of arr.calculate

console.log('Calculate :->', arr.calculate(area))

function filterEven(num) {
  return num % 2 == 0
}

Array.prototype.even = function (filterEven) {
  let output = []
  for (let index = 0; index < this.length; index++) {
    filterEven(this[index]) && output.push(this[index])
  }
  return output
}

console.log('Even Number: ->', arr.even(filterEven))

// Write your code here

// // Answer 1
// function multiply(a,b){
//     return a * b
// }
// console.log("Multiply is : -> ",multiply(2,3))

// // Answer 2
// const listOfNumbers = [0,1,2,3,4,5,6,7,8,9,10];
// const filterEven = (x) =>(x%2 ==0);

// Array.prototype.even = function(type){
//     let output =[];
//     for(let i=0;i<this.length;i++){
//         type(this[i]) && output.push(this[i])
//     }
//     return output;
// }

// console.log("Even Numbers are:->",listOfNumbers.even(filterEven))

// // Answer 3
// // Add
// const add = (x) => x+5;
// // Divide
// const divide =(x) => x/2
// console.log("Output is : -> ",divide(add(25)))
